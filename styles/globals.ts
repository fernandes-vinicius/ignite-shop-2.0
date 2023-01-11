import { globalCss } from 'styles'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },

  body: {
    lineHeight: 1.6,
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
