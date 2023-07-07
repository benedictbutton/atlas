import { Answer, Country, Game } from '@prisma/client';
import { Context } from './context';

const bcrypt = require('bcrypt');
// import type { NextApiReqzuest, NextApiResponse } from "next";

export const resolvers = {
  Query: {
    users: async (_parent: unknown, _args: {}, context: Context) => {
      const users = await context.prisma.user.findMany();
      return users;
    },
    user: async (
      _parent: unknown,
      _args: { id: string },
      context: Context,
    ) => {
      const user = await context.prisma.user.findFirst({
        where: {
          id: _args.id,
        },
      });
      return user;
    },
    countries: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      const countries = await context.prisma.country.findMany();
      return countries;
    },
    answers: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      const answers = await context.prisma.answer.findMany();
      return answers;
    },
    games: async (_parent: unknown, _args: {}, context: Context) => {
      const games = await context.prisma.game.findMany();
      return games;
    },
  },
  Mutation: {
    updateUserEmail: async (
      _parent: unknown,
      _args: { id: string; email: string },
      context: Context,
    ) => {
      return await context.prisma.user.update({
        data: {
          id: _args.email,
        },
        where: {
          id: _args.id,
        },
      });
    },
    updateManyUsers: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      const users = await context.prisma.user.findMany({
        where: { email: null },
      });
      const updateUsers = users.map(
        async (person, idx) =>
          await context.prisma.user.update({
            data: { email: `test${700 + idx}@email.com` },
            where: { id: person.id },
          }),
      );

      return await context.prisma.$transaction([updateUsers]);
    },
    deleteUser: async (
      _parent: unknown,
      _args: { id: string },
      context: Context,
    ) => {
      return await context.prisma.user.delete({
        where: {
          id: _args.id,
        },
      });
    },
    deleteManyUsers: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      return await context.prisma.user.deleteMany();
    },
    createCountry: async (
      _parent: unknown,
      _args: { name: string },
      context: Context,
    ) => {
      return await context.prisma.country.create({
        data: {
          name: _args.name,
        },
      });
    },
    createManyCountries: async (
      _parent: unknown,
      _args: { inputs: Country[] },
      context: Context,
    ) => {
      const count = await context.prisma.country.createMany({
        data: _args.inputs,
      });
      return count;
    },
    deleteManyCountries: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      const count = await context.prisma.country.deleteMany({});

      return count;
    },
    createGame: async (
      _parent: unknown,
      _args: { userId: string },
      context: Context,
    ) => {
      try {
        const countries = await context.prisma.country.findMany();
        const game = await context.prisma.game.create({
          data: {
            userId: _args.userId,
          },
        });

        const createAnswers = countries.map((country) =>
          context.prisma.answer.create({
            data: {
              country: { connect: { name: country.name } },
              game: { connect: { id: game.id } },
            },
          }),
        );

        const result = await context.prisma.$transaction(
          createAnswers,
        );

        return result;
      } catch (err) {
        console.log(err);
      }
    },
    saveGame: async (
      _parent: unknown,
      _args: {
        gameId: string;
        answers: { countryName: string; value: boolean | null }[];
      },
      context: Context,
    ) => {
      try {
        const gameAnswers:
          | (Game & {
              answers: Answer[];
            })
          | null = await context.prisma.game.findFirst({
          where: {
            id: _args.gameId,
          },
          include: {
            answers: true,
          },
        });

        const argAnswers: {
          [key: string]: boolean | null;
        } = {};
        _args.answers.map((ans) => {
          argAnswers[ans.countryName] = ans.value;
          return argAnswers;
        });

        const updateAnswers: Answer[] | undefined =
          gameAnswers?.answers.map((ans) =>
            context.prisma.answer.update({
              data: { value: argAnswers[ans.countryName] },
              where: {
                id: ans.id,
              },
            }),
          );

        const result = await context.prisma.$transaction(
          updateAnswers,
        );

        return result;
      } catch (err) {
        console.log(err);
      }
    },
    deleteManyGames: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      return await context.prisma.game.deleteMany({});
    },
    deleteManyAnswers: async (
      _parent: unknown,
      _args: {},
      context: Context,
    ) => {
      return await context.prisma.answer.deleteMany({});
    },
  },
};
