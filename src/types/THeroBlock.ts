import { TAppButton } from '@/types/TAppButton'

interface THeroBlock {
  imageURL: string,
  leadText?: string,
  titleText?: string,
  descriptionText?: string,
  buttonA?: TAppButton,
  buttonB?: TAppButton,
}

export { THeroBlock }