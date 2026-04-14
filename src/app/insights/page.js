"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { insights } from "./data";

export default function InsightsPage() {
  return (
    <section className="px-6 max-w-5xl mx-auto pt-24 pb-16">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-10">
        Insights
      </h1>

      {/* List */}
      <div className="space-y-6">
        {insights.map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition"
          >
            {/* Tag + Date */}
            <div className="flex justify-between text-xs text-gray-400">
              <span>{item.tag}</span>
              <span>{item.date}</span>
            </div>

            {/* Title */}
            <h2 className="mt-2 text-lg font-medium">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-400">
              {item.description}
            </p>

            {/* Link */}
            <Link
              href={`/insights/${item.slug}`}
              className="mt-3 inline-block text-sm text-blue-400 hover:text-blue-300"
            >
              Read →
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
}