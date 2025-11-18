import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const habitatCards = [
  {
    name: "Coral Reef",
    icon: "🐠",
    color: "from-blue-400 to-cyan-500",
    animals: ["Tropical Fish", "Seahorse", "Starfish", "Sea Turtle"],
    description: "Discover the colorful world of coral reefs",
  },
  {
    name: "Forest",
    icon: "🌲",
    color: "from-green-500 to-emerald-600",
    animals: ["Fox", "Squirrel", "Bear", "Deer"],
    description: "Explore the mysteries of the dense forest",
  },
  {
    name: "Swamp",
    icon: "🪷",
    color: "from-teal-400 to-green-500",
    animals: ["Frog", "Guineafowl", "Crocodile", "Dragonfly"],
    description: "Learn about the fascinating swamp ecosystem",
  },
];

export function HabitatInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-700 mb-4">
            Discover the world of animals
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Each habitat includes its own info card with the animals that live
            there
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {habitatCards.map((habitat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-br ${habitat.color} p-8 text-white text-center`}
              >
                <div className="text-6xl mb-3">{habitat.icon}</div>
                <h3 className="text-white">{habitat.name}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-amber-700 mb-4">{habitat.description}</p>

                <div className="space-y-2">
                  <p className="text-emerald-800">Animals that live here:</p>
                  <ul className="space-y-2">
                    {habitat.animals.map((animal, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-amber-700">{animal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mp4k.salveaza.animalele"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${habitat.color} text-white py-3 rounded-xl shadow-md`}
                  >
                    Learn more
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl text-center"
        >
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-emerald-800 mb-3">
            Interactive educational cards
          </h3>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Children can explore each habitat and learn fascinating facts about
            the animals that live there. Colorful illustrations, age-appropriate
            information, and authentic sounds make learning engaging!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
