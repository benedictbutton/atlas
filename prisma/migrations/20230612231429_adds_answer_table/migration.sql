/*
  Warnings:

  - Made the column `gameId` on table `Answer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `gameId` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_gameId_fkey";

-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "gameId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "gameId" TEXT NOT NULL,
ADD COLUMN     "value" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
