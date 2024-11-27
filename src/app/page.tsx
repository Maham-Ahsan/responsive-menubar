'use client'
import About from "@/components/About"
import Contact from "@/components/Contact"
import Devices from "@/components/Devices"
import Navbar from "@/components/Navbar"
import React from "react"
export default function Home(){
  return(
  <main>
     <Navbar />
<Devices />
<About />
<Contact />
</main>
  )
}

