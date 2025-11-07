import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 ">
      <SingleContactSocial
        Link="https://www.linkedin.com/in/mastewal-kihnet-93167b343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        Link="https://github.com/maste2121"
        Icon={FaGithub}
      />
      <SingleContactSocial
        Link="https://wa.me/+251972602570
"
        Icon={FaSquareWhatsapp}
      />
      <SingleContactSocial
        Link="https://www.instagram.com/ma.st1595?igsh=bDQ1aXhjbHVseXhs"
        Icon={FaInstagram}
      />
      <SingleContactSocial
        Link="https://t.me/M21score"
        Icon={FaTelegramPlane}
      />
    </div>
  );
};

export default ContactSocial;
