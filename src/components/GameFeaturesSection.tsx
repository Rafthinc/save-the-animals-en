import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const animals = [
  "🐧",
  "🦊",
  "🐊",
  "🦛",
  "🐸",
  "🐵",
  "🦁",
  "🐘",
  "🦒",
  "🐯",
  "🐼",
  "🦓",
];
const habitats = [
  { name: "Forest", icon: "🌲", color: "bg-green-100" },
  { name: "Jungle", icon: "🌴", color: "bg-emerald-100" },
  { name: "Savanna", icon: "🌾", color: "bg-yellow-100" },
  { name: "Ocean", icon: "🌊", color: "bg-blue-100" },
  { name: "Arctic", icon: "❄️", color: "bg-cyan-100" },
  { name: "Farm", icon: "🏡", color: "bg-orange-100" },
  { name: "Swamp", icon: "🪷", color: "bg-teal-100" },
  { name: "Desert", icon: "🏜️", color: "bg-amber-100" },
];

export function GameFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-700 mb-4">
            What you’ll find in the game
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            A world full of adventures and discoveries for little explorers
          </p>
        </motion.div>

        {/* Animals Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-center text-emerald-800 mb-6">
            50+ illustrated animals
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {animals.map((animal, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-4xl shadow-md cursor-pointer"
              >
                {animal}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habitats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-center text-emerald-800 mb-6">
            Unique and diverse habitats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {habitats.map((habitat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${habitat.color} rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="text-5xl mb-2">{habitat.icon}</div>
                <p className="text-emerald-900">{habitat.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md">
            <div className="text-4xl mb-4">🔊</div>
            <h3 className="text-purple-800 mb-2">
              Real sounds for each animal
            </h3>
            <p className="text-purple-700">
              Listen to how every animal sounds in the wild
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-md">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-blue-800 mb-2">
              Smooth animations and colorful effects
            </h3>
            <p className="text-blue-700">
              A captivating visual experience for children
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-green-800 mb-2">
              Encouraging messages with every rescue
            </h3>
            <p className="text-green-700">
              Positive feedback that motivates children
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-md">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-orange-800 mb-2">
              Celebration Screen after each set
            </h3>
            <p className="text-orange-700">Celebrate your child’s success!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
