export const starter = 'Starter'
export const lunch = 'Lunch'
export const dinner = 'Dinner'
export const dessert = 'Dessert'
export const drinks = 'Drinks'

import menuStarterImage1 from '../../../images/product/menu-starter-1.jpg'
import menuStarterImage2 from '../../../images/product/menu-starter-2.jpg'
import menuStarterImage3 from '../../../images/product/menu-starter-3.jpg'
import menuStarterImage4 from '../../../images/product/menu-starter-4.jpg'

import menuLunchImage1 from '../../../images/product/menu-lunch-1.jpg'
import menuLunchImage2 from '../../../images/product/menu-lunch-2.jpg'
import menuLunchImage3 from '../../../images/product/menu-lunch-3.jpg'
import menuLunchImage4 from '../../../images/product/menu-lunch-4.jpg'

import menuDinnerImage1 from '../../../images/product/menu-main-1.jpg'
import menuDinnerImage2 from '../../../images/product/menu-main-2.jpg'
import menuDinnerImage3 from '../../../images/product/menu-main-3.jpg'
import menuDinnerImage4 from '../../../images/product/menu-main-4.jpg'

import menuDessertImage1 from '../../../images/product/menu-dessert-1.jpg'
import menuDessertImage2 from '../../../images/product/menu-dessert-2.jpg'
import menuDessertImage3 from '../../../images/product/menu-dessert-3.jpg'
import menuDessertImage4 from '../../../images/product/menu-dessert-4.jpg'

import menuDrinkImage1 from '../../../images/product/menu-drink-1.jpg'
import menuDrinkImage2 from '../../../images/product/menu-drink-2.jpg'
import menuDrinkImage3 from '../../../images/product/menu-drink-3.jpg'
import menuDrinkImage4 from '../../../images/product/menu-drink-4.jpg'

const foodMenuData = [
  {
    id: 1,
    mealType: starter,
    name: 'Samosa',
    price: 65,
    image: menuStarterImage1,
    categories: ['Hvete/gluten'],
  },
  {
    id: 2,
    mealType: starter,
    name: 'Vårruller',
    price: 50,
    image: menuStarterImage2,
    categories: ['Hvete/gluten', 'Soya'],
  },
  {
    id: 3,
    mealType: starter,
    name: 'Røsti-poteter',
    price: 75,
    image: menuStarterImage3,
    categories: [],
  },
  {
    id: 4,
    mealType: starter,
    name: 'Dagens suppe',
    price: 45,
    image: menuStarterImage4,
    categories: ['Spør betjeningen'],
  },
  {
    id: 5,
    mealType: lunch,
    name: 'Rå Wrap',
    price: 89,
    image: menuLunchImage1,
    categories: [],
  },
  {
    id: 6,
    mealType: lunch,
    name: 'Bønneburger (anbefalt)',
    price: 99,
    image: menuLunchImage2,
    categories: ['Sulfitter', 'Soya'],
  },
  {
    id: 7,
    mealType: lunch,
    name: 'Fylt portobello',
    price: 75,
    image: menuLunchImage3,
    categories: [],
  },
  {
    id: 8,
    mealType: lunch,
    name: 'Cashew-ostefat',
    price: 120,
    image: menuLunchImage4,
    categories: ['Nøtter'],
  },
  {
    id: 9,
    mealType: dinner,
    name: 'Pasta Bolognese',
    price: 119,
    image: menuDinnerImage1,
    categories: ['Hvete/Gluten', 'Soya', 'Sulfitter'],
  },
  {
    id: 10,
    mealType: dinner,
    name: 'Pizza Terra',
    price: 129,
    image: menuDinnerImage2,
    categories: ['Hvete/Gluten', 'Soya', 'Sulfitter'],
  },
  {
    id: 11,
    mealType: dinner,
    name: 'Nuddelbolle med grønnsaker',
    price: 129,
    image: menuDinnerImage3,
    categories: ['Subway', 'Masala', 'Indian'],
  },
  {
    id: 12,
    mealType: dinner,
    name: 'Fritert aubergine (anbefalt)',
    price: 170,
    image: menuDinnerImage4,
    categories: ['Subway', 'Masala', 'Indian'],
  },
  {
    id: 13,
    mealType: dessert,
    name: 'Sjokolademousse',
    price: 79,
    image: menuDessertImage1,
    categories: ['Nøtter'],
  },
  {
    id: 14,
    mealType: dessert,
    name: 'Kjeks-is',
    price: 30,
    image: menuDessertImage2,
    categories: ['Nøtter', 'Soya', 'Hvete/Gluten'],
  },
  {
    id: 15,
    mealType: dessert,
    name: 'Fruktkake',
    price: 65,
    image: menuDessertImage3,
    categories: ['Nøtter'],
  },
  {
    id: 156,
    mealType: dessert,
    name: 'Brownie med vaniljeis',
    price: 60,
    image: menuDessertImage4,
    categories: ['Nøtter', 'Soya', 'Hvete/Gluten'],
  },
  {
    id: 17,
    mealType: drinks,
    name: 'Brus',
    price: 29,
    image: menuDrinkImage1,
    categories: [],
  },
  {
    id: 18,
    mealType: drinks,
    name: 'Kaffe / Té',
    price: 40,
    image: menuDrinkImage2,
    categories: [],
  },
  {
    id: 19,
    mealType: drinks,
    name: 'Vin',
    price: 119,
    image: menuDrinkImage3,
    categories: [],
  },
  {
    id: 20,
    mealType: drinks,
    name: 'Øl',
    price: 79,
    image: menuDrinkImage4,
    categories: [],
  },
]

export default foodMenuData
