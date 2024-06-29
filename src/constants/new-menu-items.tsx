import { ReactNode } from 'react'
import {
PortFolio,
  
} from './svgIcons'

export type MenuItemTypes = {
  key: string
  label: string
  isTitle?: boolean
  icon?: ReactNode
  url?: string
  badge?: {
    variant: string
    text: string
  }
  isDivider?: boolean
  parentKey?: string
  target?: string
  children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/landing/portfolio',
    isTitle: false,
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    isTitle: false,
    children: [
      {
        key: 'portfolio-grid',
        url: '/pages/portfolio/grid',
        label: 'Portfolio Grid',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-masonry',
        url: '/pages/portfolio/masonry',
        label: 'Portfolio Masonry',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-item',
        url: '/pages/portfolio/item',
        label: 'Portfolio Item',
        parentKey: 'portfolio',
      },
    ],
  },
  {
    key: 'blogs',
    label: 'Blog',
    parentKey: 'Pages',
    isDivider: false,
    children: [
      {
        key: 'blog-page',
        label: 'Blog',
        url: '/pages/blogs/list',
        parentKey: 'blogs',
      },
      {
        key: 'blog-post',
        label: 'Blog Post',
        url: '/pages/blogs/post',
        parentKey: 'blogs',
      },
    ],
  },
  {
    key: 'auth',
    label: 'Account',
    isTitle: false,
    children: [
      {
        key: 'auth-login',
        label: 'Login',
        url: '/auth/login',
        parentKey: 'auth',
      },
      {
        key: 'auth-register',
        label: 'Sign Up',
        url: '/auth/register',
        parentKey: 'auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forget Password',
        url: '/auth/forgot-password',
        parentKey: 'auth',
      },
      {
        key: 'auth-confirm-account',
        label: 'Confirm Account',
        url: '/auth/confirm-account',
        parentKey: 'auth',
      },
    ],
  },
  {
    key: 'contact-us',
    label: 'Contact us',
    url: '/contact-us',
    isTitle: false,
  },
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: "/landing/portfolio",
    isTitle: true,
    icon: <PortFolio />,

  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
