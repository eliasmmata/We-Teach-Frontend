import NextAuth from "next-auth";

/* import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"; */

/* import EmailProvider from "next-auth/providers/email"; */
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from 'bcrypt';
import connectDB from "./lib/connectDB";
import Users from '../../../models/userModel';


connectDB();

export default NextAuth({
  /* adapter: MongoDBAdapter(clientPromise), */
  providers: [
    /* EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        }
      },
      from: process.env.EMAIL_FROM
    }), */
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({ email })
        if (!user) {
          throw new Error('Todavía no te has registrado')
        }
        if (user) {
          return signInUser({ password, user })
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  /* callbacks: {
    async redirect(url, baseUrl) {
      return "/";
    },
  }, */
  pages: {
    /* signIn: "/", */
    error: '/auth/error',
  },
  secret: "secret",
  /* secret: process.env.SECRET, */
  database: process.env.MONGODB_URI,

});

const signInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error('Por favor introduce la contraseña')
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('contraseña incorrecta')
  }
  return user
}