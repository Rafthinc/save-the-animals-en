import { motion } from "motion/react";
import { Download, QrCode, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DownloadSection() {
  return (
    <section
      id="descarca"
      className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white overflow-hidden relative"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🐾</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌟</div>
        <div className="absolute top-1/2 left-1/4 text-7xl">🦁</div>
        <div className="absolute top-1/4 right-1/4 text-7xl">🐘</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Download the game now!</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-xl">
            Available on Google Play for only 9.99 RON. Start the educational
            adventure today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Side - Download Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Google Play Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.mp4k.salveaza.animalele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white hover:bg-gray-100 text-emerald-700 rounded-2xl px-8 py-6 w-full md:w-auto shadow-2xl">
                  <Download className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-emerald-600">Available on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </Button>
              </a>
            </motion.div>

            {/* QR Code Section */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <QrCode className="w-16 h-16 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-white mb-2">
                    Scanează pentru a descărca
                  </h3>
                  <p className="text-emerald-100 text-sm">
                    Folosește camera telefonului pentru a scana codul QR și
                    descărca direct jocul
                  </p>
                </div>
              </div>
            </div> */}

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span className="text-emerald-100">No intrusive ads</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span className="text-emerald-100">Safe for children</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span className="text-emerald-100">
                  Actualizări regulate cu conținut nou
                </span>
              </div> */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span className="text-emerald-100">
                  Works offline after installation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="bg-white rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto">
                <div className="aspect-[9/19.5] bg-gradient-to-br from-amber-100 to-emerald-100 rounded-[2.5rem] overflow-hidden relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzYzNDU1NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Phone mockup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    🦁
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 -left-10 text-6xl"
            >
              ⭐
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 -right-10 text-6xl"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl mb-2">50+</div>
            <p className="text-emerald-100">Animals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">8+</div>
            <p className="text-emerald-100">Habitats</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">100%</div>
            <p className="text-emerald-100">Educational</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
