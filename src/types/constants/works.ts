import goulashImage from '@/assets/img/works/goulash-screen.png'
import sushkofImage from '@/assets/img/works/eda1-screen.png'
import lifemartImage from '@/assets/img/works/lifemart-screen.png'


export const works = {
  lifemart: {
    id: 1,
    link: "https://lifemart.ru/",
    image: lifemartImage
  },
  sushkof: {
    id: 2,
    link: "https://eda1.ru/",
    image: sushkofImage
  },
  goulash: {
    id: 3,
    link: "https://pizzasan.ru/",
    image: goulashImage
  },
} as const
