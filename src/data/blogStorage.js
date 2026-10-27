const DATABASE_NAME = "speed-foundry-blog";
const DATABASE_VERSION = 1;
const STORE_NAME = "posts";

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error("Could not open the blog database."));
  });
}

function runTransaction(mode, action) {
  return openDatabase().then(
    (database) =>
      new Promise((resolve, reject) => {
        const transaction = database.transaction(STORE_NAME, mode);
        const request = action(transaction.objectStore(STORE_NAME));

        request.onsuccess = () => resolve(request.result);
        request.onerror = () =>
          reject(request.error ?? new Error("The blog database request failed."));
        transaction.onabort = () =>
          reject(
            transaction.error ?? new Error("The blog database transaction failed.")
          );
      }).finally(() => database.close())
  );
}

export function getBlogPosts() {
  return runTransaction("readonly", (store) => store.getAll()).then((posts) =>
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );
}

export function saveBlogPost(post) {
  return runTransaction("readwrite", (store) => store.put(post));
}

export function deleteBlogPost(id) {
  return runTransaction("readwrite", (store) => store.delete(id));
}
