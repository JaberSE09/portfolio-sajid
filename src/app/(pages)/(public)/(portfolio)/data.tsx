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
    title: 'UI/UX Design',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    icon: (
     nextjs
    ),
    title: 'Product Design',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    icon: (
     database
    ),
    title: 'Frontend Development',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
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
