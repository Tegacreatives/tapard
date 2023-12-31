
# Tapard

Tapard is a home listing application for home owners or agencies to list out apartments or available spaces for rent per night.

![Tapard 1](https://github.com/Tegacreatives/tapard/blob/main/public/images/demo/tapard2.jpg?raw=true)

## Brief summary of the development tools

The application is built with next.js 13 utilizing the app router, tailwindCss for the styling and typescript.
On the backend the application uses MongoDB hosted on [MongoDB atlas](https://www.mongodb.com/atlas/database) as the database and prisma as the ORM and for querying of data. For user authentication, I've decided to go with [Next-Auth](https://next-auth.js.org/) enabling sign-in with google or using email and password credentials.
For apartment booking, I've integrated [paystack](https://paystack.com/) as a secure means for payment, a user can pay with card or bank transfer.
The application is hosted on vercel.
I used cypress for e2e testing to spped up application testing and make sure it works as expected.

View live project on [tapard.vercel.app](https://tapard.vercel.app/)

## Future Development

Although I've completed the development of the application, there's a lot I can still do to improve the application, here are some of the plans I have for the application with more time to work on it.

### Improve QA Testing
The project uses [Cypress](https://www.cypress.io/), for e2e testing accounting for user sign in,listing reservation and successful payment. With time I could create more test cases.

### Email Integration
When users make a reservation, they should get an email with the details of their booking.

### Caching
Next.js provides some in-built features for caching but that can be extented by integrating [redis](https://redis.io/) as an in-memory data caching system.

## Application Preview

![Tapard 2](https://raw.githubusercontent.com/Tegacreatives/tapard/main/public/images/demo/tapard3.jpg)
Single property page where you can book the property.

![Tapard 3](https://github.com/Tegacreatives/tapard/blob/main/public/images/demo/tapard4.jpg?raw=true)
This is the payment processing page using paystack.

![Tapard 4](https://github.com/Tegacreatives/tapard/blob/main/public/images/demo/tapard5.jpg?raw=true)
After successful payment, you get a preview of all your listings.

To Get the project, you can simply fork the repo clone the project into your system by running

```bash
git clone https://github.com/Tegacreatives/tapard.git
```

and run the following commands in the root directory

```bash
npm install .
npm run dev
```

make sure to check the .env.example file to see how to setup your env file.
