import keycap1 from '../assets/keycap1.png'
import keycap2 from '../assets/keycap2.png'
import keycap3 from '../assets/keycap3.png'

export type Product = {
  slug: string
  type: string
  name: string
  visual: 'headset' | 'organizer' | 'prototype'
  price: number
  description: string
  colors: string[]
  material: string
  image: string
}

export const products: Product[] = [
  {
    slug: 'drzak-na-sluchatka',
    type: 'Pro domácnost',
    name: 'Držák na sluchátka',
    visual: 'headset',
    price: 349,
    description:
      'Minimalistický stojánek, který dá vašim sluchátkům pevné místo na pracovním stole.',
    colors: ['Violet', 'Cyan', 'Midnight'],
    material: 'PETG',
    image: keycap1,
  },
  {
    slug: 'organizer-na-stul',
    type: 'Pro pracovní stůl',
    name: 'Organizér na stůl',
    visual: 'organizer',
    price: 429,
    description:
      'Praktický organizér pro všechny drobnosti, které chcete mít při ruce a v pořádku.',
    colors: ['Violet', 'Cyan', 'Sand'],
    material: 'PLA',
    image: keycap2,
  },
  {
    slug: 'funkcni-doplnek',
    type: 'Pro každodenní použití',
    name: 'Funkční doplněk',
    visual: 'prototype',
    price: 299,
    description: 'Malý promyšlený doplněk pro každodenní použití, navržený a vyrobený v Česku.',
    colors: ['Cyan', 'Violet', 'Graphite'],
    material: 'PETG',
    image: keycap3,
  },
]
