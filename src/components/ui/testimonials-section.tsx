"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  company: string;
  role: string;
  avatar: string;
  text: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[400px] mx-4">
      <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-12 h-12 border border-white/20">
            <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold">
              {testimonial.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-white font-black text-lg tracking-tight uppercase">
              {testimonial.company}
            </h4>
            <p className="text-zinc-400 text-sm font-light">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-zinc-300 font-light leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>
    </div>
  );
};

export const TestimonialsSection = ({
  title,
  description,
  testimonials,
}: TestimonialsSectionProps) => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 px-4 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex"
        >
          <motion.div
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};