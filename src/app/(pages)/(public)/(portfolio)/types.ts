import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type Service = {
  icon:  StaticImageData
  title: string
  description: string
}

export type Project = {
  title: string
  description: string
  image: StaticImageData
  github: string
  website: string
}

export type Testimonial = {
  name: string
  position: string
  description: string
  image: StaticImageData
  brand: string
}
