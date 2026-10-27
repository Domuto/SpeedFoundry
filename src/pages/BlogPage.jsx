import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { deleteBlogPost, getBlogPosts, saveBlogPost } from "../data/blogStorage.js";

const MAX_SOURCE_IMAGE_SIZE = 20 * 1024 * 1024;
const MAX_STORED_IMAGE_SIZE = 1_000_000;
const MAX_IMAGE_DIMENSION = 1600;

function optimizeImage(file) {
  if (!file.type.startsWith("image/")) {
    return Promise.reject(new Error("Choose an image file."));
  }
  if (file.size > MAX_SOURCE_IMAGE_SIZE) {
    return Promise.reject(new Error("Choose an image smaller than 20 MB."));
  }

  return new Promise((resolve, reject) => {
    const image = new Image();
    const imageUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(imageUrl);
      const scale = Math.min(
        1,
        MAX_IMAGE_DIMENSION / Math.max(image.naturalWidth, image.naturalHeight)
      );
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      const context = canvas.getContext("2d");

      if (!context) {
        reject(new Error("Your browser could not process this image."));
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Your browser could not process this image."));
            return;
          }
          if (blob.size > MAX_STORED_IMAGE_SIZE) {
            reject(
              new Error(
                "This image is still too large after compression. Try a smaller image."
              )
            );
            return;
          }

          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () =>
            reject(reader.error ?? new Error("Could not read the processed image."));
          reader.readAsDataURL(blob);
        },
        "image/webp",
        0.78
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error("Could not open this image. Try a different file."));
    };
    image.src = imageUrl;
  });
}

function makeSlug(title) {
  return (
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `post-${Date.now()}`
  );
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(value)
  );
}

function BlogHeader() {
  return (
    <header className="relative overflow-hidden border-b border-bone/10 bg-charcoal px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(225,25,0,0.2),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="label">The Speed Foundry Journal</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,10vw,8rem)] uppercase leading-[0.88] tracking-tight">
          Built for the <span className="text-gold">drive.</span>
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-relaxed text-sand md:text-base">
          Ideas, advice, and inspiration for your next performance build.
          Explore the latest from The Speed Foundry.
        </p>
        <Link to="/blog/manage" className="btn btn-ghost btn-sm mt-8">
          Manage posts
        </Link>
      </div>
    </header>
  );
}

function PostCard({ post, featured = false }) {
  return (
    <article
      className={`group overflow-hidden border border-bone/10 bg-charcoal transition-colors hover:border-gold/50 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/8]" : "aspect-[4/3]"
          }`}
        >
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute left-5 top-5 bg-ink/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-bone backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className={`p-6 md:p-8 ${featured ? "md:max-w-3xl" : ""}`}>
          <p className="text-[10px] uppercase tracking-[0.18em] text-sand">
            {formatDate(post.createdAt)}
          </p>
          <h2
            className={`mt-3 font-display uppercase leading-[0.95] transition-colors group-hover:text-gold ${
              featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            {post.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand">
            {post.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-bone">
            Read article
            <span className="text-gold transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

function BlogIndex({ posts, loading, error }) {
  return (
    <>
      <BlogHeader />
      <main className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-bone/10 pb-5">
            <div>
              <p className="label">Fresh from the shop</p>
              <h2 className="mt-3 font-display text-3xl uppercase md:text-4xl">
                Latest stories
              </h2>
            </div>
            {!loading && (
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-sand sm:block">
                {String(posts.length).padStart(2, "0")} Articles
              </span>
            )}
          </div>

          {error ? (
            <p role="alert" className="border border-gold/50 p-5 text-sm text-bone">
              {error}
            </p>
          ) : loading ? (
            <p className="py-12 text-sm text-sand" role="status">
              Loading stories…
            </p>
          ) : posts.length ? (
            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} featured={index === 0} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-bone/20 px-6 py-16 text-center md:py-24">
              <p className="label">Your story starts here</p>
              <h2 className="mt-4 font-display text-3xl uppercase md:text-4xl">
                No stories yet
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-sand">
                Add your first post and a cover image to get the journal started.
              </p>
              <Link to="/blog/manage" className="btn btn-solid btn-sm mt-7">
                Write your first post
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function BlogArticle({ post }) {
  return (
    <main>
      <header className="relative flex min-h-[65vh] items-end overflow-hidden bg-charcoal px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-44 lg:px-20">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/30" />
        <div className="relative mx-auto w-full max-w-5xl">
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-bone/75 transition-colors hover:text-gold"
          >
            <span aria-hidden="true">←</span> All stories
          </Link>
          <p className="label">{post.category}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9]">
            {post.title}
          </h1>
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-bone/60">
            {formatDate(post.createdAt)}
          </p>
        </div>
      </header>

      <article className="section-pad">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-base leading-[1.9] text-bone/80">
            {post.content.split(/\n{2,}/).map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 16)}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-16 border-t border-bone/10 pt-8">
            <Link to="/blog" className="btn btn-ghost btn-sm">
              <span aria-hidden="true">←</span> Back to all stories
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

function BlogEditor({ posts, loading, storageError, onSaved, onDeleted }) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const fileInput = useRef(null);

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setCategory("");
    setExcerpt("");
    setImageAlt("");
    setContent("");
    setImage("");
    setImageName("");
    setError("");
    if (fileInput.current) fileInput.current.value = "";
  };

  const startEditing = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setCategory(post.category);
    setExcerpt(post.excerpt);
    setImageAlt(post.imageAlt);
    setContent(post.content);
    setImage(post.image);
    setImageName("Current cover image");
    setError("");
    if (fileInput.current) fileInput.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");
    setImageName("");
    setBusy(true);
    try {
      const optimizedImage = await optimizeImage(file);
      setImage(optimizedImage);
      setImageName(file.name);
    } catch (imageError) {
      setError(imageError.message);
      event.target.value = "";
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!image) {
      setError("Add a cover image before publishing this post.");
      return;
    }

    const originalPost = posts.find((post) => post.id === editingId);
    const baseSlug = makeSlug(title);
    const slug = editingId
      ? originalPost.slug
      : (() => {
          let uniqueSlug = baseSlug;
          let suffix = 2;
          while (posts.some((post) => post.slug === uniqueSlug)) {
            uniqueSlug = `${baseSlug}-${suffix}`;
            suffix += 1;
          }
          return uniqueSlug;
        })();
    const post = {
      id: editingId ?? crypto.randomUUID(),
      slug,
      title: title.trim(),
      category: category.trim(),
      excerpt: excerpt.trim(),
      image,
      imageAlt: imageAlt.trim(),
      content: content.trim(),
      createdAt: originalPost?.createdAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setBusy(true);
    try {
      await saveBlogPost(post);
      onSaved(post);
      resetForm();
    } catch (saveError) {
      setError(
        `Could not save this post in this browser. Check available storage and try again. ${saveError.message}`
      );
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (post) => {
    if (!window.confirm(`Delete "${post.title}" from this browser?`)) return;
    setError("");
    setBusy(true);
    try {
      await deleteBlogPost(post.id);
      onDeleted(post.id);
      if (editingId === post.id) resetForm();
    } catch (deleteError) {
      setError(`Could not delete this post. ${deleteError.message}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-bone/75 transition-colors hover:text-gold"
        >
          <span aria-hidden="true">←</span> View blog
        </Link>
        <div className="mb-10">
          <p className="label">Journal editor</p>
          <h1 className="mt-3 font-display text-4xl uppercase md:text-6xl">
            {editingId ? "Edit post" : "Write a post"}
          </h1>
        </div>

        <aside className="mb-10 border border-amber/40 bg-charcoal p-5 text-sm leading-relaxed text-sand">
          <p className="font-bold text-bone">Saved only in this browser</p>
          <p className="mt-2">
            Posts and images are stored on this device. They will not sync to
            other browsers, devices, or visitors to the live website. There is
            no sign-in for this local editor, so anyone using this browser can
            manage these posts.
          </p>
        </aside>

        {(error || storageError) && (
          <p role="alert" className="mb-6 border border-gold/50 p-4 text-sm text-bone">
          {error || storageError}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]"
        >
          <div className="space-y-6">
            <label className="block">
              <span className="label mb-2 block">Post title</span>
              <input
                required
                maxLength={120}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full border border-bone/20 bg-charcoal px-4 py-3 text-bone outline-none transition-colors focus:border-gold"
                placeholder="Give your story a title"
              />
            </label>

            <label className="block">
              <span className="label mb-2 block">Category</span>
              <input
                required
                maxLength={60}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full border border-bone/20 bg-charcoal px-4 py-3 text-bone outline-none transition-colors focus:border-gold"
                placeholder="Builds, parts, shop news..."
              />
            </label>

            <label className="block">
              <span className="label mb-2 block">Short summary</span>
              <textarea
                required
                maxLength={240}
                rows={3}
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                className="w-full resize-y border border-bone/20 bg-charcoal px-4 py-3 text-bone outline-none transition-colors focus:border-gold"
                placeholder="A short introduction shown on the blog page"
              />
            </label>

            <label className="block">
              <span className="label mb-2 block">Article</span>
              <textarea
                required
                rows={12}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                className="w-full resize-y border border-bone/20 bg-charcoal px-4 py-3 text-bone outline-none transition-colors focus:border-gold"
                placeholder="Write your article here. Separate paragraphs with a blank line."
              />
            </label>
          </div>

          <div className="space-y-6">
            <label className="block">
              <span className="label mb-2 block">Cover image</span>
              <input
                ref={fileInput}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-sand file:mr-4 file:cursor-pointer file:border-0 file:bg-bone file:px-4 file:py-3 file:text-[10px] file:font-bold file:uppercase file:tracking-[0.15em] file:text-ink"
              />
              <span className="mt-2 block text-xs text-sand">
                Images are resized and compressed before saving. Maximum
                original size: 20 MB.
              </span>
            </label>

            {image && (
              <img
                src={image}
                alt="Cover preview"
                className="aspect-[16/10] w-full object-cover"
              />
            )}
            {imageName && <p className="text-xs text-sand">{imageName}</p>}

            <label className="block">
              <span className="label mb-2 block">Image description</span>
              <input
                required
                maxLength={180}
                value={imageAlt}
                onChange={(event) => setImageAlt(event.target.value)}
                className="w-full border border-bone/20 bg-charcoal px-4 py-3 text-bone outline-none transition-colors focus:border-gold"
                placeholder="Describe the image for accessibility"
              />
            </label>

            <button type="submit" disabled={busy || loading} className="btn btn-solid w-full disabled:cursor-wait disabled:opacity-60">
              {busy ? "Saving…" : editingId ? "Save changes" : "Save post"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-ghost w-full"
              >
                Cancel editing
              </button>
            )}
          </div>
        </form>

        <section className="mt-20 border-t border-bone/10 pt-10">
          <p className="label">Your local posts</p>
          <h2 className="mt-3 font-display text-3xl uppercase">Manage stories</h2>
          {loading ? (
            <p className="mt-4 text-sm text-sand" role="status">Loading posts…</p>
          ) : posts.length ? (
            <ul className="mt-6 divide-y divide-bone/10">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={post.image}
                      alt=""
                      className="h-16 w-24 shrink-0 object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-bone">{post.title}</p>
                      <p className="mt-1 text-xs text-sand">
                        {post.category} · {formatDate(post.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <button
                      type="button"
                      onClick={() => startEditing(post)}
                      disabled={busy}
                      className="text-[10px] font-bold uppercase tracking-[0.18em] text-bone transition-colors hover:text-gold disabled:opacity-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(post)}
                      disabled={busy}
                      className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand transition-colors hover:text-gold disabled:opacity-50"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand transition-colors hover:text-gold"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-sand">You have not published any posts in this browser.</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default function BlogPage() {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    getBlogPosts()
      .then((savedPosts) => {
        if (active) setPosts(savedPosts);
      })
      .catch((storageError) => {
        if (active) {
          setError(
            `Could not load posts from this browser. ${storageError.message}`
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [pathname]);

  useEffect(() => {
    const post = posts.find((entry) => entry.slug === slug);
    document.title = post
      ? `${post.title} — The Speed Foundry`
      : pathname === "/blog/manage"
        ? "Manage Journal — The Speed Foundry"
        : "The Speed Foundry Journal — Performance Parts & Build Advice";
    return () => {
      document.title =
        "The Speed Foundry — Performance Parts, Peachtree Corners GA";
    };
  }, [pathname, posts, slug]);

  const updatePost = (savedPost) => {
    setPosts((currentPosts) => {
      const exists = currentPosts.some((post) => post.id === savedPost.id);
      const updatedPosts = exists
        ? currentPosts.map((post) => (post.id === savedPost.id ? savedPost : post))
        : [...currentPosts, savedPost];
      return updatedPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
  };

  const removePost = (id) => {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
  };

  if (pathname === "/blog/manage") {
    return (
      <BlogEditor
        posts={posts}
        loading={loading}
        storageError={error}
        onSaved={updatePost}
        onDeleted={removePost}
      />
    );
  }

  if (slug) {
    if (loading) {
      return <main className="min-h-screen px-6 pt-40 text-sand">Loading story…</main>;
    }
    if (error) {
      return <main role="alert" className="min-h-screen px-6 pt-40 text-bone">{error}</main>;
    }
    const post = posts.find((entry) => entry.slug === slug);
    return post ? <BlogArticle post={post} /> : <Navigate to="/blog" replace />;
  }

  return <BlogIndex posts={posts} loading={loading} error={error} />;
}
