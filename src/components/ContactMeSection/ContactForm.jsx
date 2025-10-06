import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ctcxin9", "template_8fblc4a", form.current, {
        publicKey: "W4f90cDc0FDol-zWp",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent");

          toast.success(" Message sent! ", {
            position: "top-center",
            autoClose: 100,
          });

          setTimeout(() => {
            navigate("/success", {
              state: {
                user: name,
                msg: "Thanks for reaching out!",
              },
            });
          }, 500);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan-300">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your full Name"
          required
          value={name}
          onChange={handleName}
          className="h-12 rounded-lg bg-gray-500 px-2 text-white"
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={handleEmail}
          className="h-12 rounded-lg bg-gray-500 px-2 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Messages"
          rows="10"
          cols="60"
          required
          value={message}
          onChange={handleMessage}
          className="rounded-lg bg-gray-500 p-2 text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan-400 text-white h-12 font-bold text-xl hover:bg-cyan-800 bg-cyan-400 transition-all duration-500 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
