import {
  Home,
  Info,
  Award,
  Image,
  GraduationCap,
  Download,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 shadow-md w-full max-w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center shadow-sm">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-amber-900">Save the Animals</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("acasa")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("despre")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("beneficii")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("capturi")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Screenshots & Video
            </button>
            <button
              onClick={() => scrollToSection("educatie")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              For Education
            </button>
            <button
              onClick={() => scrollToSection("descarca")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          {/* <a
            href="https://play.google.com/store/apps/details?id=com.mp4k.salveaza.animalele"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Google Play
            </Button>
          </a> */}
        </div>
      </div>
    </header>
  );
}
