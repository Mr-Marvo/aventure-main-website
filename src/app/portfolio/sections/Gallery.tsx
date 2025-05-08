"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/kpiscoremain.png",
    title: "KPI Score",
    description: "Transforming Performance into Progress",
    url: "/portfolio/kpi-score",
    category: "SAAS",
  },
  {
    id: 2,
    image: "/saleswinmain.png",
    title: "SalesWin",
    description: "A CRM That Delivers More for Less",
    url: "/portfolio/saleswin",
    category: "Web Application",
  },
  {
    id: 3,
    image: "/jobNinjamain.png",
    title: "Jobs Ninja",
    description: "Get the Job Done Effortlessly",
    url: "/portfolio/jobs-ninja",
    category: "Mobile Application",
  },
  {
    id: 4,
    image: "/jayamagamain.png",
    title: "Jayamaga",
    description: "Smart Learning for Young Minds",
    url: "/portfolio/jayamaga",
    category: "SAAS",
  },
];

// Function to count items per category
const getCategoryCounts = () => {
  const counts: Record<string, number> = { All: galleryItems.length };
  galleryItems.forEach(({ category }) => {
    counts[category] = (counts[category] || 0) + 1;
  });
  return counts;
};

const Gallery: React.FC = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categoryCounts = getCategoryCounts();

  // Define categories in desired order
  const orderedCategories = [
    "All",
    "Web Application",
    "Mobile Application",
    "SAAS",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-10">
      <div className="mb-6 flex flex-wrap gap-4">
        {orderedCategories.map((category, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full text-lg transition ${
              selectedCategory === category
                ? "bg-gray-200 text-black"
                : "border border-gray-200 drop-shadow-sm text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category} ({categoryCounts[category] || 0})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => router.push(`${item.url}`)}
          >
            <div className="relative w-full h-[300px] lg:h-[500px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                priority={index < 2}
                className="transition-transform duration-500 hover:scale-125"
              />
            </div>

            <div className="mt-2  pb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
