import { media } from './breakpoints'

export default {
  colors: {
    brand: '#0154FF',
    background: '#FFFFFF',
    foreground: '#000000',
  },
  media,
  transitions: {
    ease: (time: string = '200ms') => `${time} ease-in-out`,
    cubic: (time: string = '500ms') => `${time} cubic-bezier(0.2, 1, 0.2, 1)`,
  },
}
