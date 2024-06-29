"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import sajid from "@/assets/images/hero/sajid.png"
const Hero = () => {
  const targetRef = useRef();
  return (
    <section className="pt-44 relative bg-gradient-to-b from-red-500/5 to-amber-500/5">
      <div>
        <div className="hero-with-shapes -z-10">
          <div className="shape1" />
          <div className="shape2" />
          <div className="shape3" />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div
              className="pb-3"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <h4 className="text-lg">Hello! I am Sajid J.</h4>
              <h1 className="md:text-5xl text-3xl font-medium my-3">
                I&apos;m a freelance Full Stack Web Developer.
              </h1>
              <p className="text-base mt-6 mb-20 text-slate-700">
                A top-notch web developer helping business/individuals to craft their
                meaningful and interactive product experiences
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link 
                  href="mailto:sajidjaber@yahoo.com"
                  className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
                >
                  Hire Me
                </Link>
                <a
                href='@/assets/images/resume/resume.pdf'
                  className="py-3 px-6 rounded border border-red-500 hover:border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
                  download={"resume.pdf"}
                >
                  Download CV
                </a>

              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={500}>
              <Image
                width={374}
                height={533}
                alt="portfolio1"
                src={sajid}
                className="lg:ms-auto lg:me-0 mx-auto z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
