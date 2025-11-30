import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-xl sm:text-3xl font-extrabold text-blue-400 tracking-wide cursor-pointer">
                    𝐌𝐞𝐚𝐥𝐃𝐁 𝐄𝐱𝐩𝐥𝐨𝐫𝐞𝐫
                </h1>

                <div className="hidden md:flex gap-8 text-lg font-medium">
                    <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                    <Link to="/search" className="hover:text-blue-400 transition">Search</Link>
                    <Link to="/categories" className="hover:text-blue-400 transition">Categories</Link>
                    <Link to="/random" className="hover:text-blue-400 transition">Random Meal</Link>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col gap-4 text-center py-4 bg-gray-800">
                    <Link to="/" className="hover:text-blue-400" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/search" className="hover:text-blue-400" onClick={() => setOpen(false)}>Search</Link>
                    <Link to="/categories" className="hover:text-blue-400" onClick={() => setOpen(false)}>Categories</Link>
                    <Link to="/random" className="hover:text-blue-400" onClick={() => setOpen(false)}>Random Meal</Link>
                </div>
            )}
        </nav>
    );
}
