import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="mastewalkihnet@gmail.com" Image={MdEmail} />
      <SingleInfo text="+251972602570" Image={FaPhoneAlt} />
      <SingleInfo text="Ethiopia , Bahir Dar" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
