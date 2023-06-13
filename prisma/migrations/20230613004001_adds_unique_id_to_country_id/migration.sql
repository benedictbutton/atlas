/*
  Warnings:

  - You are about to drop the column `gameId` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Country` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[countryId]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_gameId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "gameId",
DROP COLUMN "value";

-- CreateIndex
CREATE UNIQUE INDEX "Answer_countryId_key" ON "Answer"("countryId");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
