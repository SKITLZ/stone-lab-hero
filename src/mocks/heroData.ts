
import { THeroBlock } from '@/types/THeroBlock';

const heroData = {
  imageURL: 'https://i.ibb.co/myH7CKR/heros.jpg',
  leadText: 'Discover',
  titleText: 'your stone',
  descriptionText: 'Start your engagement ring journey here. Craft your own bespoke design or browse from our ready to wear collection.',
  buttonA: {
    text: 'New arrivals',
    onClick: () => {
      console.log('onClick A btn handler');
    },
  },
  buttonB: {
    text: 'Best sellers',
    bgColour: 'transparent',
    onClick: () => {
      console.log('onClick B btn handler');
    },
  },
} as THeroBlock

export { heroData } 
