/*
  Warnings:

  - You are about to drop the column `type` on the `Account` table. All the data in the column will be lost.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT,
ALTER COLUMN "email" SET NOT NULL;
