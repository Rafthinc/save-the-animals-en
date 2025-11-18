import { motion } from "motion/react";
import { GraduationCap, Users, Heart, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EducatorsSection() {
  return (
    <section
      id="educatie"
      className="py-20 bg-gradient-to-b from-white to-amber-50"
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
            Recommended by psychologists and educators
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            A valuable tool for kindergartens, therapists, and parents
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBraWRzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzQ1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Classroom education"
              // className="rounded-3xl shadow-2xl"
              className="w-full h-auto max-w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-emerald-800 mb-2">
                    Ideal for kindergartens and early learning
                  </h3>
                  <p className="text-amber-700">
                    Develops cognitive and social skills in a safe and fun
                    environment
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-emerald-800 mb-2">
                    Useful in ABA sessions for developing attention and empathy
                  </h3>
                  <p className="text-amber-700">
                    Recommended by therapists for children with special
                    developmental needs
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-emerald-800 mb-2">
                    Created by psychologists & psychotherapists with experience
                    in child development
                  </h3>
                  <p className="text-amber-700">
                    Scientifically grounded to support healthy child development
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-emerald-800 mb-2">
                    Used for language development and visual recognition
                  </h3>
                  <p className="text-amber-700">
                    Enriches vocabulary and strengthens observation skills
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial / Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center"
        >
          <div className="text-6xl mb-6">👨‍⚕️</div>
          <blockquote className="text-2xl md:text-3xl mb-6 italic">
            "An exceptional educational game that perfectly combines learning
            with fun. I highly recommend it for children’s cognitive and
            emotional development."
          </blockquote>
          <p className="text-emerald-100">
            — Cognitive-behavioral psychotherapist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
