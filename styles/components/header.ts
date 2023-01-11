import styled from 'styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Bag = styled('button', {
  position: 'relative',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed'
  },

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
