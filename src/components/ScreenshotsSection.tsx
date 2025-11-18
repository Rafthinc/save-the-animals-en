import { motion } from "motion/react";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

// import img1 from "../assets/1.jpg";
// import img2 from "../assets/1.jpg";
// import img3 from "../assets/1.jpg";
// import img4 from "../assets/1.jpg";

const screenshots = [
  { title: "Ecran Principal", emoji: "🏠", image: "/a.jpeg" },
  { title: "Selectează Animalul", emoji: "🐾", image: "/b.jpeg" },
  { title: "Găsește Habitatul", emoji: "🌍", image: "/c.jpeg" },
  { title: "Salvează Animalul", emoji: "💚", image: "/d.jpeg" },
  { title: "Felicitări!", emoji: "🎉", image: "/e.jpeg" },
  { title: "Fișă Educativă", emoji: "📖", image: "/f.jpeg" },
];

export function ScreenshotsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="capturi"
      className="py-20 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-700 mb-4">
            Screenshots & Video from the Game
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            See what the game looks like and how it helps children learn about
            animals
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/97UfFkIjH70"
                title="Save the Animals Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Optional label overlay */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                ▶️ Official Trailer
              </div>
            </div>
          </div>
        </motion.div>

        {/* Screenshots Gallery */}
        <div className="space-y-8">
          {/* Main Screenshot Display */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-xl">
              <div className="aspect-[9/16] bg-white rounded-2xl shadow-lg flex items-center justify-center text-8xl">
                <img
                  src={screenshots[selectedIndex].image}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4 text-emerald-800">
                {screenshots[selectedIndex].title}
              </p>
            </div>
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`aspect-[9/16] rounded-xl shadow-md flex items-center justify-center text-4xl transition-all ${
                  selectedIndex === index
                    ? "bg-gradient-to-br from-emerald-400 to-emerald-500 ring-4 ring-emerald-300"
                    : "bg-gradient-to-br from-amber-100 to-orange-100 hover:shadow-lg"
                }`}
              >
                <img src={screenshot.image} alt="" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-emerald-800 mb-2">Optimized for tablets</h3>
            <p className="text-amber-700 text-sm">Perfect for large screens</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-emerald-800 mb-2">Colorful graphics</h3>
            <p className="text-amber-700 text-sm">
              Attractive illustrations for children
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-emerald-800 mb-2">Smooth animations</h3>
            <p className="text-amber-700 text-sm">Engaging experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
