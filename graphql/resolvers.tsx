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
    countries: async (_parent, _args, context: Context) => {
      const countries = await context.prisma.country.findMany();
      return countries;
    },
    answers: async (_parent, _args, context: Context) => {
      const answers = await context.prisma.answer.findMany();
      return answers;
    },
    games: async (_parent, _args, context: Context) => {
      const games = await context.prisma.game.findMany();
      return games;
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
      const updateUsers = users.map(
        async (person, idx) =>
          await prisma.user.update({
            data: { email: `test${700 + idx}@email.com` },
            where: { id: person.id },
          }),
      );

      return await prisma.$transaction([updateUsers]);
    },
    createCountries: async (_parent, _args) => {
      const count = await prisma.country.createMany({
        data: _args.inputs,
      });
      return count;
    },
    deleteAllCountries: async (_parent, _args) => {
      const count = await prisma.country.deleteMany({});

      return count;
    },
    createGame: async (_parent, _args, context: Context) => {
      try {
        const game = await prisma.game.create({
          data: {
            userId: _args.userId,
          },
        });

        const createAnswers = _args.countries.map((country) =>
          context.prisma.answer.create({
            data: {
              country: { connect: { id: country.id } },
              game: { connect: { id: game.id } },
            },
          }),
        );

        await prisma.$transaction(createAnswers);

        const answers = await prisma.answer.findMany({
          where: { gameId: game.id },
        });

        return answers;
      } catch (err) {
        console.log(err);
      }
    },
    deleteGames: async (_parent, _args) => {
      return await prisma.game.deleteMany({});
    },
    deleteAnswers: async (_parent, _args) => {
      return await prisma.answer.deleteMany({});
    },
  },
};
