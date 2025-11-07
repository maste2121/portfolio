import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState(""); // Show success/failure below form

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ctcxin9", "template_8fblc4a", form.current, {
        publicKey: "_LdUMYjDLNozDVAew",
      })
      .then(
        () => {
          // Clear form fields
          setName("");
          setEmail("");
          setMessage("");

          // Show success
          setStatusMsg("✅ Message sent successfully!");
          toast.success("✅ Message sent successfully!", {
            position: "top-center",
            autoClose: 2000,
          });

          // Redirect after short delay
          setTimeout(() => {
            navigate("/success", {
              state: {
                user: name,
                msg: "Thanks for reaching out!",
              },
            });
          }, 2200);
        },
        (error) => {
          console.error("FAILED...", error);

          const errorMsg =
            (error && error.text) ||
            "❌ Failed to send message. Please try again!";
          setStatusMsg(errorMsg);

          toast.error(errorMsg, {
            position: "top-center",
            autoClose: 4000,
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact Us</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 text-white w-full max-w-md"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your full name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 rounded-lg bg-gray-700 px-3"
        />

        <input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-lg bg-gray-700 px-3"
        />

        <textarea
          name="message"
          placeholder="Your message..."
          rows="6"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg bg-gray-700 p-3"
        ></textarea>

        <button
          type="submit"
          className="w-full h-12 font-bold text-xl text-white rounded-lg bg-cyan-500 hover:bg-cyan-700 transition"
        >
          Send
        </button>
      </form>

      {statusMsg && (
        <p
          className={`mt-4 text-center ${
            statusMsg.includes("❌") ? "text-red-500" : "text-green-400"
          }`}
        >
          {statusMsg}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
