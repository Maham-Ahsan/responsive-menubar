import React from "react";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import {useState} from "react";

const Navbar =() => {
  const
    [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="container pt-4 fixed ">
          <div className="flex justify-between items-center"> 

      <div className="ml-3 text-xl text-bold">Maham</div>
    <ul className="gap-5 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"> <a href="#about">About Us</a></li>
          <li className="menuLink"> <a href="#contact" >Contact</a></li>
    </ul>
    <div className="md:hidden" onClick={toggleMenu}>
      {isMenuOpen ? <AiOutlineClose size={30}/> :
      <AiOutlineMenu size={30}/>  }
    </div>
    </div>
    {isMenuOpen && (
      <ul className="flex flex-col gap-4 md-4 md:hidden bg-red-800">
        <li className="menuLink">
          <a href="#hero" onClick={toggleMenu}>Home</a>
        </li>
        <li className="menuLink">
          <a href="#about" onClick={toggleMenu}>About Us</a>
        </li>
        <li className="menuLink">
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    )
  }
  </div>
    )
};

export default Navbar
