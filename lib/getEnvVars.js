// lib/getEnvVars.js
export function getEnvVars() {
  return {
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASS: process.env.MONGODB_PASS,
    MONGODB_HOST: process.env.MONGODB_HOST,
    MONGODB_DB: process.env.MONGODB_DB,
    MONGODB_APPNAME: process.env.MONGODB_APPNAME,
  };
}

