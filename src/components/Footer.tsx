import { Home, Facebook, Youtube, Mail, PhoneIcon } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-amber-900 to-emerald-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center shadow-md">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Save the Animals</span>
            </div>
            <p className="text-amber-100 mb-4">
              Educational game for children. Help the animals return to their
              natural habitat and learn about the wonderful world of nature!
            </p>
            <p className="text-amber-200 text-sm">
              Created with ❤️ by a cognitive-behavioral psychotherapist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("acasa")}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("despre")}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  About the Game
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("beneficii")}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("educatie")}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  For Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("descarca")}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-amber-100 mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@savetheanimals.ro"
                className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>psihoterapiieficiente@gmail.com</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>+40723179552</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors"
              >
                <span>
                  ✨ Created by Roșu Adrian-Francois, psychologist and
                  cognitive-behavioral psychotherapist, member of the Romanian
                  College of Psychologists, nutritionist, and IT developer, in
                  collaboration with Anca Neculai, clinical psychologist and ABA
                  coordinator, specialist in working with children.
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-200">
          <p>© 2025 Save the Animals. All rights reserved.</p>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
