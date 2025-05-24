
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="security-gradient text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SecureGuard</h3>
                <p className="text-sm text-slate-300">Web Security Toolkit</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Empowering developers with comprehensive security tools and best practices for safer web applications.
            </p>
          </div>

          {/* Tools Section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Security Tools</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Vulnerability Scanner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Encryption</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Headers Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Checker</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Security Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-300">
              support@secureguard.dev
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-slate-300 text-sm">
            © 2024 SecureGuard. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
