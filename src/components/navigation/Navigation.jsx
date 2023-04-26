import React from "react";
import "./navigation.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const handleScroll = () => {
      let isAnyActive = false;
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let id = sec.getAttribute("id");
  
        if (top >= offset) {
          setActiveNav(`#${id}`);
          isAnyActive = true;
        }
      })
      if (!isAnyActive) {
        setActiveNav('#');
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
    
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <GiBookshelf />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Navigation;
