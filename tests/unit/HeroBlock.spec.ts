import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import HeroBlock from '@/components/HeroBlock.vue'

describe('HeroBlock.vue', () => {
  const heroData = {
    leadText: 'Discover',
    titleText: 'your stone',
    descriptionText: 'Start your engagement ring journey here. Craft your own bespoke design or browse from our ready to wear collection.',
    buttonA: {
      text: 'New arrivals',
    },
    buttonB: {
      text: 'Best sellers',
    },
  }
  const { leadText, titleText, descriptionText, buttonA, buttonB } = heroData

  it('renders all elements', () => {
    render(HeroBlock, {
      props: {
        ...heroData,
      },
    })

    expect(screen.getByText(leadText)).toBeVisible()
    expect(screen.getByText(titleText)).toBeVisible()
    expect(screen.getByText(descriptionText)).toBeVisible()
    expect(screen.getByText(buttonA.text)).toBeVisible()
    expect(screen.getByText(buttonB.text)).toBeVisible()
  }) 
})
