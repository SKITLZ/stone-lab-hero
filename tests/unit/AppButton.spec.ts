import { render, screen, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import AppButton from '@/components/AppButton.vue'

describe('AppButton.vue', () => {
  const btnText = 'Click here'

  it('renders and is visible', () => {
    render(AppButton, {
      props: {
        text: btnText,
      },
    })
    expect(screen.getByText(btnText)).toBeVisible()
  });

  it('isVisible prop works correctly', async () => {
    const { rerender } = render(AppButton, {
      props: {
        text: btnText,
      },
    })
    expect(screen.getByText(btnText)).toBeVisible()

    await rerender({ isVisible: true })
    expect(screen.getByText(btnText)).toBeVisible()

    await rerender({ isVisible: false })
    expect(screen.getByText(btnText)).not.toBeVisible()
  })

  it('emits onClick event', async () => {
    const { emitted } = render(AppButton, {
      props: {
        text: btnText,
      },
    })
    const btn = screen.getByText(btnText)
    await fireEvent.click(btn)
    expect(emitted().onClick).toBeDefined()
  })  
})
