// types
import { Project, Service, Testimonial } from './types'

//images
import projectImg1 from '@/assets/images/features/agency1.jpg'
import projectImg2 from '@/assets/images/features/agency2.jpg'

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
      'As a Full Stack Web Developer specializing in Next.js, I design and build dynamic web applications that are both user-friendly and highly efficient. I handle everything from crafting interactive user interfaces using React and Next.js to developing robust backend services with Node.js and Express. My role involves optimizing performance, managing databases like MongoDB or MySQL, and ensuring secure, scalable deployments. Additionally, I collaborate closely with cross-functional teams, implement responsive designs, and continuously integrate and deploy updates to enhance the overall user experience.',
  },
  {
    icon: (
     nextjs
    ),
    title: 'Next Js Expert',
    description:
      'As a Next.js expert, I build high-performance web applications with React, focusing on server-side rendering (SSR) and static site generation (SSG) for optimal speed and SEO. I develop robust backend APIs using Node.js and Express, integrate databases like MongoDB and MySQL, and optimize performance with techniques like code-splitting and incremental static regeneration (ISR).I ensure reliability through testing with Jest and Cypress and manage deployments to cloud platforms such as Vercel and AWS. By setting up CI/CD pipelines, I streamline continuous integration and deployment. I collaborate with cross-functional teams, use Git for version control, and stay updated with the latest trends to deliver scalable, efficient web solutions.',
  },
  {
    icon: (
     database
    ),
    title: 'Database Structure',
    description:
      'As a Next.js expert, I design and implement efficient database structures tailored to application needs. This includes creating normalized relational databases using MySQL or PostgreSQL for structured data and utilizing MongoDB for flexible, document-oriented data storage. I ensure data integrity and optimize performance through indexing, schema design, and query optimization. Additionally, I implement robust data security measures and handle migrations and backups to maintain data consistency and availability.',
  },
]

const projects: Project[] = [
  {
    title: 'Project',
    description: 'Branding, Interaction, Web Design',
    image: projectImg1,
  },
  {
    title: 'Project 2',
    description: 'Branding, Web Design & Development',
    image: projectImg2,
  },
  {
    title: 'Project 3',
    description: 'Branding, Interaction, Web Design',
    image: projectImg2,
  },
  {
    title: 'Project 4',
    description: 'Branding, Web Design & Development',
    image: projectImg1,
  },
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
