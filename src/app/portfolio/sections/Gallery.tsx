"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: any;
  image: string;
  title: string;
  description: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/Image Block.png",
    title: "SAAS PRODUCT TESTING",
    description: "UX/UI Web Development",
    category: "SAAS",
  },
  {
    id: 2,
    image: "/Image Block (1).png",
    title: "WEB APPLICATION TESTING",
    description: "UX/UI Web Development",
    category: "Web Application",
  },
  {
    id: 3,
    image: "/Image Block (2).png",
    title: "MOBILE APPLICATION TESTING",
    description: "UX/UI Web Development",
    category: "Mobile Application",
  },
  {
    id: 4,
    image: "/Image Block (3).png",
    title: "SAAS PRODUCT TESTING",
    description: "UX/UI Web Development",
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
      {/* Category Filter Buttons */}
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                priority={index < 2}
                className="transition-transform duration-500 hover:scale-125"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
