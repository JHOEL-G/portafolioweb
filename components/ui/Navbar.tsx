import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 z-50 flex w-full justify-center">
      <div className="flex items-center gap-2 px-4 py-2 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full shadow-lg">
        {itemsNavbar.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded transition"
          >
            {item.icon}
          </Link>
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
