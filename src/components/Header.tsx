import React from "react";

interface HeaderProps {
  title: string;
  description?: string;  // Optional prop
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="container mx-auto text-center p-4">
      <h1 className="text-4xl font-bold text-teal-500">{title}</h1>
      {description && <p className="text-gray-500">{description}</p>}
    </header>
  );
};

export default Header;