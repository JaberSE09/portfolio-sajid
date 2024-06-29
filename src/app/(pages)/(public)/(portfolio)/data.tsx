// types
import { Project, Service, Testimonial } from './types'

//images
import projectImg1 from '@/assets/images/features/projects/teckinfinity.png'
import projectImg2 from '@/assets/images/features/projects/jimmyjay.png'

import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import coding from '@/assets/images/icons/coding.png'
import nextjs from '@/assets/images/icons/nextjs.png'
import database from '@/assets/images/icons/database.png'
const services: Service[] = [
  {
    icon: (
    coding
    ),
    title: 'Full Stack Web Developer',
    description:
      ' As a Full Stack Web Developer specializing in Next.js, I design and build dynamic web applications that are both user-friendly and highly efficient.',
  },
  {
    icon: (
     nextjs
    ),
    title: 'Next Js Expert',
    description:
      'As a Next.js expert, I build high-performance web applications with React, focusing on server-side rendering (SSR) and static site generation (SSG) for optimal speed and SEO.',
  },
  {
    icon: (
     database
    ),
    title: 'Database Management',
    description:
      'I design and implement efficient database structures tailored to application needs. This includes creating normalized relational databases using MySQL or PostgreSQL for structured data and utilizing MongoDB for flexible, document-oriented data storage.',
  },
]

const projects: Project[] = [
  {
    title: 'Teck Infinity Ecommerce Website',
    description: 'A Shopify store for a tech company',
    github: 'https://github.com/JaberSE09/teckinfinity-shopify',
    website: "https://myteckinfiniy.com",
    image: projectImg1,
  },
  {
    title: 'Limo Service Website',
    description: 'Next JS Portfolio Website that uses tailwind css',
    image: projectImg2,
    github: 'https://github.com/JaberSE09/jimmycab',
    website: 'https://jimmycab.vercel.app/'
  },
  // {
  //   title: 'Project 3',
  //   description: 'Branding, Interaction, Web Design',
  //   image: projectImg2,
  // },
  // {
  //   title: 'Project 4',
  //   description: 'Branding, Web Design & Development',
  //   image: projectImg1,
  // },
]

const testimonials: Testimonial[] = [
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
    brand: amazon,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
    brand: google,
  },
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
    brand: amazon,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
    brand: google,
  },
]

export { services, projects, testimonials }
