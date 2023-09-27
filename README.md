This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tapard

Tapard is a home listing application for home owners or agencies to list out apartments or available spaces for rent per night.

## Brief summary of the development tools

The application is built with next.js 13 utilizing the app router, tailwindCss for the styling and typescript.
On the backend the application uses MongoDB hosted on MongoDB atlas as the database and prisma as the ORM and for querying of data. For user authentication, I've decided to go with Next-Auth enabling sign-in with google or using email and password credentials.
For apartment booking, I've integrated paystack as a secure means for payment, a user can pay with card or bank transfer.
The application is hosted on vercel.

## Future Development

Although I've completed the development of the application, there's a lot I can still do to improve the application, here are some of the plans I have for the application with more time to work on it.

-QA Testing
With Cypress, I can speed up the development workflow while also ensuring the appication works as expected by setting up e2e testing and also setup CI/CD pipeline using github actions

-Email Integration
When users make a reservation, they should get an email with the details of their booking.

-Caching
Next.js provides some in-built features for caching but that can be extented by integrating redis as an in-memory caching system.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
