import styled from 'styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Bag = styled('button', {
  position: 'relative',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  cursor: 'pointer',

  variants: {
    variant: {
      empty: {
        color: '$gray500',
      },
      full: {
        color: '$gray300',
      },
    },
  },

  defaultVariants: {
    variant: 'empty',
  },
})

export const BagCounter = styled('div', {
  position: 'absolute',
  right: -7,
  top: -7,

  minWidth: '1.688rem',
  height: '1.688rem',
  // padding: '0.5rem',
  backgroundColor: '$green500',
  border: '3px solid',
  borderColor: '$gray900',
  borderRadius: 1000,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '$sm',
  fontWeight: 'bold',
  color: '$white',
})
