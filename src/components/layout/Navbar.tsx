
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">Kalasar</a>
          <div className="hidden ml-10 space-x-4 md:flex">
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#benefits" className="nav-link">Benefits</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>
        </div>
        <Button className="cta-button">
          Start Your Free Trial
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
