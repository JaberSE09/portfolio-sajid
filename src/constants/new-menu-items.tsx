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
    url: '/',
    isTitle: false,
  },
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: "/",
    isTitle: false,
    // icon: <PortFolio />,
  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
