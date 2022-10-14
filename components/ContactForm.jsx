import React, { useState } from "react";
import styles from "../styles/ContactForm.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

import { Fade } from "react-awesome-reveal";

export default function ContactForm() {
  const router = useRouter();

  const [sent, setSent] = useState(false);

  // Initial status state
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // All inputs used in the form
  const [inputs, setInputs] = useState({
    name: "",
    message: "",
    business: "",
    budget: "",
    email: "",
  });

  // Reset the data and set submitted to true after submitting
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        business: "",
        budget: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  // Update values on change of any input
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  // Reset the status so user can send again
  const resetStatus = () => {
    setSent(false);

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  // Handle submitting
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/maykbkpl",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );

        setSent(true);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const ContactForm = (
    <Fade cascade triggerOnce delay={50}>
      <form onSubmit={handleOnSubmit}>
        {/* Hidden input used to change the subject of the email */}
        <input
          type="hidden"
          name="_subject"
          value="New message from portfolio website"
        />
        <div className={styles.group}>
          <div className={styles.one}>
            <input
              placeholder="Full Name"
              id="name"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
          </div>
          <div className={styles.two}>
            <input
              placeholder="Email address"
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
        </div>

        <div className={styles.group}>
          <div className={styles.one}>
            <input
              placeholder="Business"
              id="business"
              name="business"
              onChange={handleOnChange}
              required
              value={inputs.business}
            />
          </div>
          <div className={styles.two}>
            <input
              placeholder="Budget"
              id="budget"
              name="budget"
              onChange={handleOnChange}
              required
              value={inputs.budget}
            />
          </div>
        </div>

        <textarea
          placeholder="Message"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          rows="10"
        />

        {/* Text of button changes depending on the status */}
        <motion.button
          type="submit"
          disabled={status.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h6>
            {!status.submitting
              ? !status.submitted
                ? "Send"
                : "Sent"
              : "Sending..."}
          </h6>
          {!status.submitting && !status.submitted && <FaArrowRight />}
        </motion.button>
      </form>
    </Fade>
  );

  const SentMessage = (
    <Fade cascade triggerOnce delay={100}>
      <section className={styles.thankyou}>
        <h5>
          Thank you for getting in touch! We appreciate you contacting us. One
          of our colleagues will get back in touch with you soon! Have a great
          day!
        </h5>

        <button type="submit" onClick={resetStatus}>
          <h6>Send again</h6>
          <FaArrowRight />
        </button>
      </section>
    </Fade>
  );

  return (
    <div className={styles.contactForm} id="contact">
      {sent ? SentMessage : ContactForm}
    </div>
  );
}
