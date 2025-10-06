import React from "react";
import { useLocation, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SuccessPage = () => {
  const location = useLocation();
  const { user, msg } = location.state || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mt-32 px-4"
    >
      <h1 className="text-green-400 text-3xl font-bold mb-4">
        Message Sent Successfully!
      </h1>
      <p className="text-white text-lg">
        {msg} {user && <strong>{user}</strong>} 🙌
      </p>
      <Link
        to="/"
        className="inline-block mt-6 text-cyan-400 hover:underline text-lg"
      >
        ← Back to Home
      </Link>
    </motion.div>
  );
};

export default SuccessPage;
