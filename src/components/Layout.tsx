import { useState, useEffect } from "react";
import { TopMiniNav } from "./TopMiniNav";
import { MainNavbar } from "./MainNavbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [topNavVisible, setTopNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled from top
      setIsScrolled(currentScrollY > 50);

      // Show/hide top nav based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setTopNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setTopNavVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopMiniNav visible={topNavVisible} />
      <MainNavbar isScrolled={isScrolled} topNavVisible={topNavVisible} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
