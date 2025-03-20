"use client";
import React, { useState } from "react";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
  category: string; // Add a category field to each item
}

const galleryItems: GalleryItem[] = [
  {
    image: "/Image Block.png",
    title: "SAAS PRODUCT TESTING",
    description: "UX/UI Web Development",
    category: "SAAS",
  },
  {
    image: "/Image Block (1).png",
    title: "WEB APPLICATION TESTING",
    description: "UX/UI Web Development",
    category: "Web Application",
  },
  {
    image: "/Image Block (2).png",
    title: "MOBILE APPLICATION TESTING",
    description: "UX/UI Web Development",
    category: "Mobile Application",
  },
  {
    image: "/Image Block (3).png",
    title: "SAAS PRODUCT TESTING",
    description: "UX/UI Web Development",
    category: "SAAS",
  },
];

const categories = ["All", "Web Application", "Mobile Application", "SAAS"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter the gallery items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-10">
      <div className="mb-6 flex justify-start space-x-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-lg ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
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
