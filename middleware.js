export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard', '/profile'], // ✅ protect these routes
};

