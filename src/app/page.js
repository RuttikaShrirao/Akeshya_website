"use client"
import React, { useEffect } from 'react'
import Navbar from "../app/Components/Navbar";
import HomePage from "../app/Pages/HomePage";
import Footer from "../app/Components/Footer";
import Aos from 'aos'
 import "aos/dist/aos.css"
export default function Home() {
  useEffect(()=>{
    Aos.init({})
  },[])
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer />
    </>
   
  );
}
