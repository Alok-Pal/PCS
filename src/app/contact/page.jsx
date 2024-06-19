"use client";
import { Input } from "../../components/ui/input";
import { useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const form = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();

    const a = form.current;
    setTimeout(() => {
      setFormData({ email: "", message: "" });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      ref={form}
      className=" dark:bg-gray-900 py-12 relative"
      style={{
        backgroundImage: `url('/assets/mainImg.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "89vh",
      }}
    >
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-black  dark:text-white">
          {" "}
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center ">
          We here to help with any questions about our projects, programs or
          events. Reach out and let us know how we can assist you in software
          journey
        </p>
        <form action="" className="space-y-4 mt-4" onSubmit={handleForm}>
          <Input
            type="email"
            value={formData?.email}
            name="email"
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            onChange={handleChange}
            required
          />
          <textarea
            value={formData?.message}
            placeholder="Your message"
            name="message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            onChange={handleChange}
            required
          ></textarea>
          <button
            // type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            onClick={(e) => handleForm(e)}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
