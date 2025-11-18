import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="acasa"
      className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-emerald-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-amber-900 mb-4">
              Save the Animals – An educational game for kids!
            </h1>
            <p className="text-amber-700 mb-8 text-xl">
              Help the sad animals return home to their natural habitat!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.mp4k.salveaza.animalele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 shadow-xl">
                  <Download className="w-5 h-5 mr-2" />
                  Download the game
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-2 border-amber-500 text-amber-700 hover:bg-amber-100 rounded-full px-8 py-6"
                onClick={() => scrollToSection("capturi")}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch trailer
              </Button>
            </div>

            {/* Features badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-amber-200">
                <span className="text-amber-800">🎮 50+ Animals</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-amber-200">
                <span className="text-amber-800">🌍 8+ Habitats</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-amber-200">
                <span className="text-amber-800">🔊 Real Animal Sounds</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHRhYmxldCUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MzQ1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Child playing Save the Animals"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating animals */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 text-6xl"
            >
              🐧
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-10 -right-10 text-6xl"
            >
              🦊
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 left-20 text-6xl"
            >
              🐊
            </motion.div>
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute bottom-20 -right-5 text-6xl"
            >
              🦛
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-10 text-4xl opacity-30"
            >
              ⭐
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 right-10 text-4xl opacity-30"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
