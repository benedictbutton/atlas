/*
  Warnings:

  - You are about to drop the column `countryId` on the `Answer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryName` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_countryId_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "countryId",
ADD COLUMN     "countryName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_countryName_fkey" FOREIGN KEY ("countryName") REFERENCES "Country"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
