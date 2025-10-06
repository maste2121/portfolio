import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      {/* <img
        src="../../public/dark-mode.png"
        alt=""
        className="max-w-[250px] rounded-[100px] cursor-pointer "
      /> */}
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
