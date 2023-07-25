import { useRouter } from "next/router";
import { useState } from "react";

const ModLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <a href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
          h-[1px] inline-block w-0 bg-white 
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </a>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuClass = isMobileMenuOpen ? "block" : "hidden";

  return (
    <header
      className="w-full px-32 py-4 font-medium
        flex items-center justify-center bg-neutral-900 text-white"
    >
      <nav className="p-4 border rounded-2xl text-xl relative">
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-70"
            onClick={toggleMobileMenu}
          >
            <div className="p-4 border rounded-2xl bg-black">
              <ModLink href="/" className="block my-2" title="Home" />
              <ModLink href="/about" className="block my-2" title="About" />
              <ModLink href="/projects" className="block my-2" title="Projects" />
              <ModLink href="/articles" className="block my-2" title="Articles" />
            </div>
          </div>
        )}
        <a href="#" onClick={toggleMobileMenu} className="md:hidden">
          Menu
        </a>
        <div className="hidden md:block">
          <ModLink href="/" className="mr-4" title="Home" />
          <ModLink href="/about" className="mx-4" title="About" />
          <ModLink href="/projects" className="mx-4" title="Projects" />
          <ModLink href="/articles" className="mx-4" title="Articles" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
