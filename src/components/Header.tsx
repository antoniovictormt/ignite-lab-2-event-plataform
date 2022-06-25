import { List, X } from 'phosphor-react';
import { useState } from 'react'
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState();

  return (
    <header className="w-full py-5 px-5 lg:px-0 flex items-center justify-around lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />

      <div className="lg:hidden flex justify-center items-center">
        <span className="text-blue-500  ">
          Aulas
        </span>

        <List size={40} className="text-blue-500" />
        <X size={40} className="text-blue-500" />
      </div>
    </header>
  )
}
