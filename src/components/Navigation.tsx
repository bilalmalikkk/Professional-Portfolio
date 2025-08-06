import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import PortfolioIcon from "@/assets/Portfolio-Icon.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", isAnchor: false },
    { name: "Services", href: "/services", isAnchor: false },
    { name: "Projects", href: "/projects", isAnchor: false },
    { name: "Testimonials", href: "/testimonials", isAnchor: false },
    { name: "Contact", href: "/contact", isAnchor: false }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="max-w-7.5xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
            <img src={PortfolioIcon} alt="Portfolio" className="w-10 h-10 -mr-1" />
            <span className="text-xl font-semibold text-white">Portfolio</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 text-sm ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/10 mt-4 pt-4 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-2 px-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors duration-200 py-2 px-4 ${
                      location.pathname === item.href
                        ? "text-foreground"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;