import { useState } from "react";
import Directory from "../components/Directory.jsx";
export default function FoodDrinksPage() { const [filter, setFilter] = useState("Eat"); return <div className="pt-20"><Directory filter={filter} setFilter={setFilter} /></div>; }
