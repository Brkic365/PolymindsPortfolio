import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.scss";

import ContactForm from "./ContactForm";

import {
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h1>Ready to improve your brand with a professional website?</h1>
        <ContactForm />
        <section className={styles.categories}>
          <section className={styles.category}>
            <h5>LINKS</h5>
            <ul>
              <li>
                <a href="#what-we-do">What we do</a>
              </li>
              <li>
                <a href="#our-work">Our work</a>
              </li>
              <li>
                <a href="#who-we-are">Who we are</a>
              </li>
            </ul>
          </section>

          <section className={styles.category}>
            <h5>CONTACT</h5>
            <ul>
              <li>
                <FaEnvelope />
                <a href="mailto:info@polyminds.tech">info@polyminds.tech</a>
              </li>
              <li>
                <FaInstagram />
                <a
                  href="https://instagram.com/polyminds"
                  target="_blank"
                  rel="noreferrer"
                >
                  @polyminds
                </a>
              </li>
              <li>
                <FaTwitter />
                <a
                  href="https://twitter.com/MindsPoly"
                  target="_blank"
                  rel="noreferrer"
                >
                  @MindsPoly
                </a>
              </li>
              <li>
                <FaFacebookF />
                <a
                  href="https://www.facebook.com/people/Polyminds/100087741548596/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Polyminds
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.category}>
            <h5>OUR POLICIES</h5>
            <ul>
              <li>
                <Link href="/privacy-policy">
                  <a>Privacy policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
            </ul>
          </section>
        </section>

        <p>Copyright © Polyminds 2022. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
