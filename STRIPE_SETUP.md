# Stripe Payment Setup Guide

## Getting Started with Stripe

The donation form is now integrated with Stripe Checkout, which allows secure credit card payments.

## Setup Steps

### 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account (or log in if you already have one)
3. Complete the account setup process

### 2. Get Your API Keys

1. Go to the [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode)

### 3. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Stripe keys:
   ```
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. Replace the placeholder values with your actual Stripe keys

### 4. Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to the "Get Involved" page and try making a test donation
3. Use Stripe's test card numbers:
   - **Card**: 4242 4242 4242 4242
   - **Expiry**: Any future date (e.g., 12/25)
   - **CVC**: Any 3 digits (e.g., 123)
   - **ZIP**: Any 5 digits (e.g., 12345)

### 5. Go Live (Production)

When you're ready to accept real payments:

1. In Stripe Dashboard, toggle from **Test mode** to **Live mode**
2. Get your **live** API keys (they start with `pk_live_` and `sk_live_`)
3. Update your `.env.local` with the live keys
4. Update `NEXT_PUBLIC_BASE_URL` to your production domain
5. Redeploy your application

## How It Works

1. User fills out the donation form with amount, name, and email
2. Form submits to `/api/create-checkout-session`
3. Server creates a Stripe Checkout session
4. User is redirected to Stripe's secure payment page
5. After payment, user is redirected back with success/cancel status
6. Receipt is automatically sent to the donor's email

## Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Keep your secret key secure - never expose it in client-side code
- Use test keys during development
- Switch to live keys only when ready for production

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Stripe Support](https://support.stripe.com)

