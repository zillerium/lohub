// lib/authOptions.js
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const cloudRunURL = process.env.CLOUDRUN_API_BASE_URL;
const internalApiKey = process.env.INTERNAL_API_KEY;

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(`${cloudRunURL}/auth-options`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': internalApiKey,
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Auth failed');
          }

          const user = await response.json();

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            credits: user.credits,
          };
        } catch (error) {
          console.error('❌ Auth error:', error);
          throw new Error(error.message || 'Internal server error');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.credits = user.credits;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.credits = token.credits;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
};

