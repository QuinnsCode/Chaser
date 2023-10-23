/*
  Warnings:

  - You are about to drop the column `planechaseImageId` on the `PlanechaseCard` table. All the data in the column will be lost.
  - You are about to drop the column `userGameSettingsId` on the `PlanechaseCard` table. All the data in the column will be lost.
  - You are about to drop the `GranularGameSettings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CardList" DROP CONSTRAINT "_CardList_A_fkey";

-- AlterTable
ALTER TABLE "PlanechaseCard" DROP COLUMN "planechaseImageId",
DROP COLUMN "userGameSettingsId",
ADD COLUMN     "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SharedGame" ALTER COLUMN "gameState" SET DEFAULT '';

-- AlterTable
ALTER TABLE "UserConnectionSettings" ADD COLUMN     "allowsChat" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "allowsMultiplayer" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "GranularGameSettings";

-- CreateTable
CREATE TABLE "AdvancedGameSettings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "timed" BOOLEAN NOT NULL,

    CONSTRAINT "AdvancedGameSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Deck" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UsedCards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Deck_AB_unique" ON "_Deck"("A", "B");

-- CreateIndex
CREATE INDEX "_Deck_B_index" ON "_Deck"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UsedCards_AB_unique" ON "_UsedCards"("A", "B");

-- CreateIndex
CREATE INDEX "_UsedCards_B_index" ON "_UsedCards"("B");

-- AddForeignKey
ALTER TABLE "_Deck" ADD CONSTRAINT "_Deck_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanechaseCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Deck" ADD CONSTRAINT "_Deck_B_fkey" FOREIGN KEY ("B") REFERENCES "SharedGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsedCards" ADD CONSTRAINT "_UsedCards_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanechaseCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsedCards" ADD CONSTRAINT "_UsedCards_B_fkey" FOREIGN KEY ("B") REFERENCES "SharedGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardList" ADD CONSTRAINT "_CardList_A_fkey" FOREIGN KEY ("A") REFERENCES "AdvancedGameSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
