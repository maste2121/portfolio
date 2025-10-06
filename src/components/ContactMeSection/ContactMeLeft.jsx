import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-orange-300 text-3xl mb-4 ">Work With Me</h2>
        <p className="text-white">
          Thank you for visiting my portfolio. I'm always open to discussing new
          projects, creative ideas, or collaboration opportunities. Feel free to
          reach out using the form below. I look forward to connecting with you
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
