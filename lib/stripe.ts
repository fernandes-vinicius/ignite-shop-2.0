import Stripe from 'stripe'

const apiSecretKey = process.env.STRIPE_SECRET_KEY!

export const stripe = new Stripe(apiSecretKey, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  },
})
