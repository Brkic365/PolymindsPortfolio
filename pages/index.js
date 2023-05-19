import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { motion } from "framer-motion";

import { Fade } from "react-awesome-reveal";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPencilRuler,
  FaLaptopCode,
  FaWrench,
} from "react-icons/fa";
import { useRouter } from "next/router";

const steps = [
  {
    title: "Design",
    description:
      "Our design team creates visually stunning and user-friendly websites that elevate our clients' online presence and help achieve their business goals.",
    icon: <FaPencilRuler />,
  },
  {
    title: "Development",
    description:
      "Our development team builds robust and scalable web applications that are tailored to meet the unique needs of our clients and deliver exceptional user experiences.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Optimization",
    description:
      "Our optimization team enhances website performance, speed, and search engine ranking to boost online visibility and engagement for our clients.",
    icon: <FaWrench />,
  },
];

const projects = [
  {
    name: "RocketWizard",
    description: "Large-scale copytrading website featuring talented traders",
    image: "rw.webp",
    href: "https://www.rocketwizard.io/",
  },
  {
    name: "Ebankc",
    description:
      "EBankc is the most rewarding and secured institution in the DeFi industry",
    image: "ebankc.webp",
    href: "https://ebankc.vercel.app/",
  },
  {
    name: "Minty Solutions",
    description:
      "All-in-one digital marketing service personalised to your project that enhances and optimizes social media management and marketing",
    image: "minty.webp",
    href: "https://www.mintysolutions.com/",
  },
  {
    name: "Luxury Perspective",
    description: "Professional Real Estate website with multiple pages",
    image: "luxury.webp",
    href: "https://luxury-perspective.vercel.app/",
  },
  {
    name: "Honeycomb",
    description:
      "Full-stack website made for house builders. It is used to plan projects and develop ideas regarding the house building",
    image: "honeycomb.webp",
    href: "https://honeycombsite.netlify.app/login",
  },
  {
    name: "eWarz",
    description:
      "A CS:GO themed website for a CS:GO community server. Site is built using React.js and TypeScript and Bootstrap",
    image: "ewarz.webp",
    href: "https://affectionate-beaver-774e53.netlify.app/",
  },
  {
    name: "Sanomind",
    description:
      "A web application for therapists and psychologists which allows them to create their podcasts, share exclusive content, and much more",
    image: "sanomind.webp",
    href: "https://qa.sanomind.com/",
  },
  {
    name: "Dream Finders",
    description:
      "Real estate website where you can explore our diverse range of listings and find your dream property",
    image: "dream-finders.webp",
    href: "https://dream-finders.vercel.app/",
  },
  {
    name: "Code for Good",
    description:
      "Dynamic, single-page website designed and developed using Next.js, featuring information on a fictional hackathon event with responsive design and interactive features",
    image: "code-for-good.webp",
    href: "https://codeforgood-hackathon.vercel.app/",
  },
];

export default function Home() {
  const router = useRouter();

  // Screen width
  const [width, setWidth] = useState(0);

  // Get screen width
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width to state
        setWidth(window.innerWidth);
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      if (window.matchMedia("(pointer: coarse)").matches) {
        setTouchscreen(true);
      }

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Polyminds</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We Design Solutions and Experiences."
        />
        <meta property="og:image" content="/images/logo.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
          <h1>
            We Design <span>Solutions</span> and <span>Experiences.</span>
          </h1>
          <p>
            Our team consists of experienced web developers and designers who
            are ready to take on any task.
          </p>
          <section className={styles.cta}>
            <motion.button
              className={styles.mainCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/#contact")}
            >
              {"Let's talk"}
            </motion.button>
            <section className={styles.socialMediaCta}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://www.instagram.com/", "_ blank")
                }
              >
                <FaInstagram />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/people/Polyminds/100087741548596/",
                    "_ blank"
                  )
                }
              >
                <FaFacebookF />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://twitter.com/MindsPoly", "_ blank")
                }
              >
                <FaTwitter />
              </motion.button>
            </section>
          </section>

          <Fade cascade triggerOnce delay={50} style={{ width: "100%" }}>
            <section className={styles.imageHolders}>
              <div className={styles.imageHolder} />
              <div className={styles.imageHolder} />
              <div className={styles.imageHolder} />
              <div className={styles.imageHolder} />
            </section>
          </Fade>
        </section>

        {/* What we do section */}
        <section className={styles.whatWeDo} id="what-we-do">
          <section className={styles.title}>
            <h2>What we do</h2>
            <div className={styles.line} />
            <p>
              Our job as a web development agency is to bring you the best and
              the highest quality work out there, and we assure you that we do
              exactly that. With a team full of experienced professionals,
              creating high quality work is a simple task.
            </p>
          </section>

          <Fade cascade triggerOnce delay={50} style={{ width: "100%" }}>
            <section className={styles.steps}>
              {
                // Map through all 3 steps and display them accordingly

                steps.map((step, i) => {
                  return (
                    <section className={styles.step} key={i}>
                      {step.icon}
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      {
                        // If it is not the last step, add a seperator
                        i !== steps.length - 1 && (
                          <div className={styles.seperator} />
                        )
                      }
                    </section>
                  );
                })
              }
            </section>
          </Fade>
        </section>

        {/* Our work section */}
        <section className={styles.ourWork} id="our-work">
          <section className={styles.title}>
            <h1>OUR</h1>
            <div className={styles.line} />
          </section>
          <section className={styles.title}>
            <div className={styles.line} />
            <h1>WORK</h1>
          </section>

          <Fade cascade triggerOnce delay={50}>
            <section className={styles.projects}>
              {
                // Map through first 9 projects and display them accordingly
                projects.map((project, i) => {
                  return (
                    <section
                      className={styles.project}
                      key={i}
                      style={{
                        backgroundImage: `url(${process.env.DEV_URL}/images/projects/${project.image})`,
                      }}
                      onClick={() => window.open(project.href, "_ blank")}
                    >
                      <section className={styles.content}>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </section>
                    </section>
                  );
                })
              }
            </section>
          </Fade>
        </section>

        {/* Who we are section */}
        {/* 
        <section className={styles.whoWeAre} id="who-we-are">
          <section className={styles.title}>
            <section className={styles.content}>
              {" "}
              <h2>Who we are</h2>
              <p>
                Our job as a web development agency is to bring you the best and
                the highest quality work out there, and we assure you that we do
                exactly that. With a team full of experienced professionals,
                creating high quality work is a simple task.
              </p>
            </section>

            <div className={styles.line} />
          </section>

          <Fade cascade triggerOnce delay={50} style={{ width: "100%" }}>
            <section className={styles.images}>
              <section className={styles.image} />
              <section className={styles.image} />
              <section className={styles.image} />
            </section>
          </Fade>
        </section>
        */}
      </main>
    </div>
  );
}
