import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',

  overflowY: 'auto',
  minWidth: '32rem',
  padding: '4.5rem 3rem',
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  backgroundColor: 'transparent',
  color: '$gray500',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',
})

export const Title = styled(Dialog.Title, {
  marginBottom: '2rem',

  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$gray100',
})

export const ListProductsContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flexGrow: 1,
  marginBottom: '2rem',
})

export const ProductItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  img: {
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
  fontSize: '$md',
  flex: 1,

  span: {
    color: '$gray300',
  },

  strong: {
    fontWeight: 'bold',
    color: '$gray100',
  },

  button: {
    background: 'transparent',
    display: 'inline-block',
    border: 0,
    cursor: 'pointer',
    color: '$green500',
    fontSize: '$md',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ButtonCheckout = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
  width: '100%',
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,
  padding: '1.25rem 2rem',
  fontSize: '$md',
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
