import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import HeroBlock from '@/components/HeroBlock.vue'

describe('HeroBlock.vue', () => {
  it('renders props.msg when passed', () => {
      const imageURL = 'https://i.ibb.co/myH7CKR/heros.jpg';
      const leadText = 'Discover';
      const titleText = 'your stone';
      const descriptionText = 'Start your engagement ring journey here. Craft your own bespoke design or browse from our ready to wear collection.';
      const buttonA = {
        text: 'New arrivals',
        onClick: () => {
          console.log('onClick A btn handler');
        },
      };
      const buttonB = {
        text: 'Best sellers',
        bgColour: 'transparent',
        onClick: () => {
          console.log('onClick B btn handler');
        },
      };
    render(HeroBlock, {
      props: {
        imageURL, leadText, titleText, descriptionText, buttonA, buttonB,
      }
    })

    screen.getByText(leadText)
  })
})
