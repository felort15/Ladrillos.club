import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  heroImage: string;
  price: number;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  heroImage,
  price,
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={heroImage} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-teal-600 font-bold">${price}</span>
          <span className="text-sm text-gray-500">{category}</span>
        </div>
      </div>
    </div>
  );
}; 