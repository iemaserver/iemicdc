"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Crown, Award, Star } from "lucide-react";

interface SingleListProps {
  title: string;
  members: string[] | Record<string, string[]>;
}

// Pick colorful bullet classes in rotation
const bulletColors = [
  "from-red-500 to-pink-500",
];

const getCommitteeIcon = (title: string) => {
  if (title.toLowerCase().includes("chair") || title.toLowerCase().includes("general")) {
    return <Crown className="w-6 h-6 text-red-600" />;
  }
  if (title.toLowerCase().includes("advisory")) {
    return <Star className="w-6 h-6 text-blue-600" />;
  }
  if (title.toLowerCase().includes("program")) {
    return <Award className="w-6 h-6 text-green-600" />;
  }
  return <Users className="w-6 h-6 text-purple-600" />;
};

const renderMemberList = (list: string[]) => (
  <ul className="space-y-4 mt-4">
    {list.map((member, idx) => {
      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
      const colorClass = bulletColors[idx % bulletColors.length]; // rotate colors

      return (
        <motion.li
          ref={ref}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          key={idx}
          className="flex items-center space-x-3 text-base sm:text-lg text-gray-700 pl-4 hover:text-[#4A6CF7] cursor-default"
        >
          <div
            className={`w-3 h-3 bg-gradient-to-r ${colorClass} rounded-full transition-transform duration-200`}
          ></div>
          <span className="self-center pl-3">{member}</span>
        </motion.li>
      );
    })}
  </ul>
);

export default function SingleList({ title, members }: SingleListProps) {
  const icon = getCommitteeIcon(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#f5feff] w-full lg:w-[70%] border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 mb-10 mx-auto"
    >
      {/* Title with icon */}
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h3 className="text-3xl font-bold text-[#4A6CF7] group-hover:text-pink-600 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {Array.isArray(members) ? (
        renderMemberList(members)
      ) : (
        Object.entries(members).map(([subTitle, subMembers]) => (
          <motion.div
            key={subTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#f9f9ff] rounded-lg p-4 mb-6 shadow-sm"
          >
            <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-3 space-x-2">
              {getCommitteeIcon(subTitle)}
              <span>{subTitle}</span>
            </h4>
            {subMembers.length ? (
              renderMemberList(subMembers)
            ) : (
              <p className="text-sm text-gray-500 pl-4">To be announced</p>
            )}
          </motion.div>
        ))
      )}
    </motion.div>
  );
}
