import { motion } from "motion/react";
import { Brain, Eye, Zap, Heart, Globe, School } from "lucide-react";

const educationalBenefits = [
  {
    icon: Brain,
    title: "Develops logic and attention",
    color: "from-purple-400 to-purple-500",
  },
  {
    icon: Eye,
    title: "Improves visual recognition",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: Zap,
    title: "Strengthens memory and association",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Heart,
    title: "Boosts empathy and responsibility",
    color: "from-pink-400 to-red-500",
  },
  {
    icon: Globe,
    title: "Supports language learning (Romanian + English)",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: School,
    title: "Recommended for early learning in kindergartens",
    color: "from-indigo-400 to-indigo-500",
  },
];

export function EducationalBenefitsSection() {
  return (
    <section
      id="despre"
      className="py-20 bg-gradient-to-b from-emerald-50 to-amber-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-700 mb-4">Real educational benefits</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Cognitive and emotional development through interactive play
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationalBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-emerald-800">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl border-4 border-emerald-200"
        >
          <div className="flex items-start gap-4">
            <div className="text-5xl">🎓</div>
            <div>
              <h3 className="text-emerald-800 mb-2">Approved by specialists</h3>
              <p className="text-amber-700">
                Created by psychologists & psychotherapists with experience in
                child development. Recommended by educators and psychologists
                for early learning and emotional growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
