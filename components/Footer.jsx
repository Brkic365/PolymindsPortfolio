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
                <a href="mailto:group.polyminds@gmail.com">
                  group.polyminds@gmail.com
                </a>
              </li>
              <li>
                <FaInstagram />
                <a href="https://instagram.com/polyminds">@polyminds</a>
              </li>
              <li>
                <FaTwitter />
                <a href="https://twitter.com/MindsPoly">@MindsPoly</a>
              </li>
              <li>
                <FaFacebookF />
                <a href="https://facebook.com/MindsPoly">Polyminds</a>
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
              <li>
                <Link href="/refund-policy">
                  <a>Refund Policy</a>
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
