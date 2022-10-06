// /graphql/context.ts
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../prisma/prismadb';

export type Context = {
  prisma: PrismaClient;
};

export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}): Promise<Context> {
  return {
    prisma,
    req,
    res,
  };
}
