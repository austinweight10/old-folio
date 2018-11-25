import matchBetting1 from '../images/projects/matchBetting/1.jpg'
import matchBetting2 from '../images/projects/matchBetting/2.jpg'
import matchBetting3 from '../images/projects/matchBetting/3.jpg'
import matchBetting4 from '../images/projects/matchBetting/4.jpg'
import creativeCalculator1 from '../images/projects/creativeCalculator/1.jpg'
import creativeCalculator2 from '../images/projects/creativeCalculator/2.jpg'
import creativeCalculator3 from '../images/projects/creativeCalculator/3.jpg'
import endClothing1 from '../images/projects/endClothing/home.png'
// import endClothing2 from "../images/projects/endClothing/plp.png"
import endClothing3 from '../images/projects/endClothing/pdp.png'
import endClothing4 from '../images/projects/endClothing/brands.png'
// import endClothing5 from "../images/projects/endClothing/savedItems.png"
// import endClothing6 from "../images/projects/endClothing/sale.png"
import endClothing7 from '../images/projects/endClothing/gifts.png'
import endClothing8 from '../images/projects/endClothing/lancheshome.jpg'
// import endClothing9 from "../images/projects/endClothing/launchespage.jpg"
import endClothing10 from '../images/projects/endClothing/entrypage.jpg'
import endClothing11 from '../images/projects/endClothing/bloghome.jpg'
import endClothing12 from '../images/projects/endClothing/blogpostpage.jpg'
import bannerAds1 from '../images/projects/bannerAds/images/Abercrombi&Fitch-300x250.png'
import bannerAds2 from '../images/projects/bannerAds/images/Matches-Fashion-300x250.png'
import bannerAds3 from '../images/projects/bannerAds/images/Missguided2-300x250.jpg'
import bannerAds4 from '../images/projects/bannerAds/images/Toast-300x250.png'
import bannerAds5 from '../images/projects/bannerAds/images/ToysRUs-300x250.png'
import bannerAds6 from '../images/projects/bannerAds/300x250.gif'
import bannerAds7 from '../images/projects/bannerAds/aldo300.mp4'
import bannerAds8 from '../images/projects/bannerAds/feelUnique300.mp4'
import bannerAds9 from '../images/projects/bannerAds/footAsylum300.mp4'
import bannerAds10 from '../images/projects/bannerAds/jimyChoo300.mp4'
import bannerAds11 from '../images/projects/bannerAds/karewnMillen300.mp4'
import bannerAds12 from '../images/projects/bannerAds/roman300.mp4'
import bannerAds13 from '../images/projects/bannerAds/warehouse300.mp4'
import bannerAds14 from '../images/projects/bannerAds/whistles300.mp4'
import React from 'react'

const ProjectDictonary = [
  {
    name: 'creativeCalculator',
    title: 'Creative Calculator',
    intro:
      'I lead this project and created a fully functioning ad calculator. The mission was to collect hundreds of ads and analyse them using a custom grid and my team then processed this data so that it was valid for use in the calculator. This was to enable anyone to drop an ad into the calaculator and it would tell you the best and worst parts and where it could be imroved. This tock months of analising ads and comparing campaingns based on roi and click perfomance and splitting the results across the funnel to provid useful insights. I was responsible for designing the grid and building the calculator.',
    images: [creativeCalculator1, creativeCalculator2, creativeCalculator3],
  },
  {
    name: 'endClothing',
    title: 'End Clothing',
    intro:
      'In this project we moved the existing End. Clothing site built on magento 1 on to magento 2. We rebuilt it with a fully responsive and redesigned font-end with progressive web app features along with a seperate styleguide. We customised the saved items for all social sharing and custom wish lists. Along with a custom live chat widget and help desk and custom blocks for reuse through the site. I rebuilt the whole email system for both marketing and transactional with mjml and templated them so that anyone could create emails. There where also two more re-skins as part of this project a seperate site for launching unique items built in angular and a seperate blog built on wordpress.',
    link: 'https://endclothing.com',
    images: [
      endClothing1,
      endClothing3,
      endClothing4,
      endClothing7,
      endClothing8,
      endClothing10,
      endClothing11,
      endClothing12,
    ],
  },
  {
    name: 'bannerAds',
    title: 'Banner Ads',
    intro:
      "I headed up the fashion side of Quantcast's clientle and had the pleaseure of working with some of the most renound retailers in the industry. This is a selection of ads that I designed and built for them. There are a number of different styles of ads from prospecting all the way down the funnel to retargeting. All of the ads are designed for performance and evaluated against uplift on a campaign by campaign level.",
    images: [
      bannerAds1,
      bannerAds2,
      bannerAds3,
      bannerAds4,
      bannerAds5,
      bannerAds6,
    ],
    videos: [
      bannerAds7,
      bannerAds8,
      bannerAds9,
      bannerAds10,
      bannerAds11,
      bannerAds12,
      bannerAds13,
      bannerAds14,
    ],
  },
  {
    name: 'matchBetting',
    title: 'Match Betting',
    intro:
      'This project started out as a small app for a friend and developed into a fully functioning site that allows people to save and check bets against each other, whilst offering advice based on splitting the bet for lowest posible losses, while targeting high scoring bets. This app was built in react as this allowed me to update the constantly changing data on the fly. This was built as a progressive web app and this all data was stored in cookies meaning the app worked offline.',
    images: [matchBetting1, matchBetting2, matchBetting3, matchBetting4],
  },
  {
    name: 'headless',
    title: 'Headless END.',
    intro:
      'This project started out as a small app for a friend and developed into a fully functioning site that allows people to save and check bets against each other, whilst offering advice based on splitting the bet for lowest posible losses, while targeting high scoring bets. This app was built in react as this allowed me to update the constantly changing data on the fly. This was built as a progressive web app and this all data was stored in cookies meaning the app worked offline.',
    images: [matchBetting1, matchBetting2, matchBetting3, matchBetting4],
  },
]

export default ProjectDictonary
