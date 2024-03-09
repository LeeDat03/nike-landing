import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <nav className="p-large flex items-center justify-between gap-10">
      <a href="#">
        <img
          src={headerLogo}
          alt="Header Logo"
          className="h-10 max-lg:h-9 max-md:h-8"
        />
      </a>
      <ul className="flex flex-1 items-center justify-center gap-24 text-xl text-slate-500 max-lg:hidden">
        {navLinks.map((link, i) => {
          return (
            <li
              key={i}
              className="cursor-pointer duration-200 hover:scale-110 hover:text-primary hover:transition-all"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          );
        })}
      </ul>
      <div className="hidden max-lg:block">
        <img
          src={hamburger}
          alt="Menu"
          className="h-10 w-10 max-lg:h-8 max-lg:w-8 max-md:h-6 max-md:w-6"
        />
      </div>
    </nav>
  );
};

export default Nav;
