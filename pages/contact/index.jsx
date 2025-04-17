"use client"

import { motion } from "framer-motion"
import { BsArrowRight, BsWhatsapp } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

// Animation variants moved directly into this file
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast.success("Thank you. I will get back to you ASAP.")
        myForm.reset() // optional: clears the form after submission
      })
      .catch((error) => {
        console.error(error)
        toast.error("Oops! Something went wrong.")
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="h-full bg-primary/30 pt-7">
      {/* Add the Toaster component here */}
      <Toaster position="top-center" />

      <div className="container  mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 "
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Contact links section */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&to=abdullah.bil45@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg border border-white/20 rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300 group w-full md:w-auto justify-center"
            >
              <HiOutlineMail className="text-xl group-hover:scale-110 transition-all duration-300" />
              <span className="mx-2">abdullah.bil45@gmail.com</span>
              <BsArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a
              href="https://wa.me/447899562793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg border border-white/20 rounded-full px-6 py-3 hover:border-red-500 hover:text-red-500 transition-all duration-300 group w-full md:w-auto justify-center"
            >
              <BsWhatsapp className="text-xl group-hover:scale-110 transition-all duration-300" />
              <span className="mx-2">Get a quote</span>
              <BsArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </motion.div>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            data-netlify="true"
            name="contact"
            method="POST"
          >
            {/* Hidden input for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex gap-x-6 w-full">
              <input type="text" name="name" placeholder="Name" className="input" disabled={isLoading} required />
              <input type="email" name="email" placeholder="E-mail" className="input" disabled={isLoading} required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" disabled={isLoading} required />
            <textarea name="message" placeholder="Message..." className="textarea" disabled={isLoading} required />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
