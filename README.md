# NextAuth Session Undefined in getServerSideProps in Next.js 15

This repository demonstrates a bug in Next.js 15 where the NextAuth session is undefined in a component using `getServerSideProps` after a successful login. The issue stems from an incorrect configuration of `getServerSideProps` or improper use of the `unstable_getServerSession` method.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the About page.
5. Observe that the session is undefined, resulting in the 'You are not logged in' message being displayed even after a successful login.

## Solution

The solution involves ensuring correct usage of `unstable_getServerSession` within `getServerSideProps`.  Refer to the `aboutSolution.js` file for a working implementation.