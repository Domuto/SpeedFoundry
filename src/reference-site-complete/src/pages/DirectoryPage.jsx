import { useState } from "react";
import Directory from "../components/Directory.jsx";
export default function DirectoryPage() { const [filter, setFilter] = useState("All"); return <div className="pt-20"><Directory filter={filter} setFilter={setFilter} /></div>; }
