import { motion } from "motion/react";
import { Heart, Volume2, Home, Sparkles, Trophy, Baby } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Learn through play, not pressure",
    description: "Children learn naturally while playing and having fun",
  },
  {
    icon: Home,
    title: "Match animals with real habitats",
    description: "Discover where animals live in the wild",
  },
  {
    icon: Volume2,
    title: "Hear authentic animal sounds",
    description: "Each animal has its own real and unique sound",
  },
  {
    icon: Heart,
    title: "Help sad animals become happy",
    description: "Save the animals and watch them transform",
  },
  {
    icon: Trophy,
    title: "Receive positive and motivational messages",
    description: "Positive feedback with every success",
  },
  {
    icon: Baby,
    title: "Perfect for ages 3 – 7",
    description: "Designed especially for preschoolers",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficii" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-700 mb-4">Why do kids love this game?</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            An educational game that combines fun with learning about the animal
            world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-emerald-800 mb-2">{benefit.title}</h3>
              <p className="text-amber-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Example */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-7xl mb-2">😢</div>
              <p className="text-amber-800">Sad animal in a cage</p>
            </div>
            <div className="text-5xl text-emerald-600">→</div>
            <div className="text-center">
              <div className="text-7xl mb-2">😊</div>
              <p className="text-emerald-800">Happy animal at home!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
