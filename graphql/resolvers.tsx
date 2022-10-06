import { Context } from './context';
const bcrypt = require('bcrypt');
// import type { NextApiRequest, NextApiResponse } from "next";

export const resolvers = {
  Query: {
    users: async (_parent, _args, context: Context) => {
      const users = await context.prisma.user.findMany();
      return users;
    },
    user: async (_parent, _args, context: Context) => {
      const user = await prisma.user.findFirst({
        where: {
          email: _args.email,
        },
      });
      return user;
    },
  },
  Mutation: {
    createUser: async (_parent, _args) => {
      const { email, password } = _args?.inputs;
      try {
        const hash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
          data: {
            email: email,
            password: hash,
          },
        });
        return user;
      } catch (err) {
        console.log('Error');
      }
    },
    authenticateUser: async (_parent, _args) => {
      const { email, password } = _args?.inputs;
      try {
        return await prisma.user.update({
          data: {
            email: email,
            password: hash,
          },
        });
      } catch (err) {
        console.log('Error');
      }
    },
    updateUser: async (_parent, _args) => {
      return await prisma.user.update({
        data: {
          email: _args.email,
        },
        where: {
          id: _args.id,
        },
      });
    },
    deleteUser: async (_parent, _args) => {
      return await prisma.user.delete({
        where: {
          email: 'benedictdaly@hotmail.com',
        },
      });
    },
    updateManyUsers: async (_parent, _args) => {
      const users = await prisma.user.findMany({
        where: { email: null },
      });
      console.log(users);
      const updateUsers = users.map(
        async (person, idx) =>
          await prisma.user.update({
            data: { email: `test${700 + idx}@email.com` },
            where: { id: person.id },
          }),
      );

      return await prisma.$transaction([updateUsers]);
    },
  },
};
