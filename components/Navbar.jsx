import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";

import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

import { BsPencilFill, BsLaptopFill, BsFillPeopleFill } from "react-icons/bs";

function Navbar() {
  const router = useRouter();

  // State that handles opening and closing of the mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  const [links] = useState([
    {
      title: "What we do",
      href: "/#what-we-do",
      img: <BsPencilFill />,
    },
    {
      title: "Our work",
      href: "/#our-work",
      img: <BsLaptopFill />,
    },
    {
      title: "Who we are",
      href: "/#who-we-are",
      img: <BsFillPeopleFill />,
    },
  ]);

  // Values asigned to the top line of the hamburger menu used for rotation
  const topLineVariants = {
    open: { transform: "translateY(350%) rotateZ(45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  // Values asigned to the bottom line of the hamburger menu used for rotation
  const bottomLineVariants = {
    open: { transform: "translateY(-350%) rotateZ(-45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  return (
    <nav className={styles.nav}>
      <MobileMenu
        open={openMenu}
        links={links}
        setOpen={(open) => setOpenMenu(open)}
      />

      <section className={styles.logoHolder} onClick={() => router.push("/")}>
        <Image
          src="/images/logo.svg"
          alt="Polyminds logo"
          width={244}
          height={42}
          priority
        />
      </section>

      {/* Navbar links */}
      <ul className={styles.links}>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <button className={styles.cta}>Get in touch</button>

      <div
        className={styles.hamburger}
        onClick={() => setOpenMenu(!openMenu)}
        id="hamburger"
      >
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={topLineVariants}
          id="line1"
        />
        <div
          className={styles.line}
          style={openMenu ? { opacity: 0 } : undefined}
          id="line2"
        />
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={bottomLineVariants}
          id="line3"
        />
      </div>
    </nav>
  );
}

export default Navbar;
