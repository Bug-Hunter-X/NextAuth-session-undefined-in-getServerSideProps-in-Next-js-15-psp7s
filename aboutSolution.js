```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  // Properly handle the case where session is null
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>An unexpected error occurred. Please try again.</p> 
      )}
    </div>
  );
}
```