
import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 security-gradient rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">SecureGuard</h1>
              <p className="text-sm text-slate-600">Web Security Toolkit</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#scanner" className="text-slate-600 hover:text-blue-600 transition-colors">Scanner</a>
            <a href="#tools" className="text-slate-600 hover:text-blue-600 transition-colors">Tools</a>
            <a href="#guide" className="text-slate-600 hover:text-blue-600 transition-colors">Guide</a>
            <Button className="security-gradient text-white">Get Started</Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
