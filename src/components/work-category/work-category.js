"use client"

import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Lighted Nameplates', image: '/images/work/lighted-name-plate.jpg', link: '/category/lighted-nameplates' },
  { name: 'Non-Lighted Nameplates', image: '/images/work/non-lighted-nameplate.jpg', link: '/category/non-lighted-nameplates' },
  { name: 'Neon Signs', image: '/images/work/neon-signs.jpg', link: '/category/neon-signs' },
  { name: 'Pillar/Gate Lamps', image: '/images/work/pillar-gate-lamps.png', link: '/category/pillar-gate-lamps' },
];

const Category = () => {
  return (
    <div className="container mx-auto text-center mb-6">
      <h1 className="text-3xl font-bold my-8 mb-8">Customized Work Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-6 mr-6">
        {categories.map((category) => (
          <Link href={category.link} key={category.name}>
            <div className="relative w-full h-72 cursor-pointer">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-2xl">{category.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;