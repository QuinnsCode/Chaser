/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "PlanechaseCard" ADD COLUMN     "userGameSettingsId" TEXT;

-- DropTable
DROP TABLE "UserExample";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserConnectionSettings" (
    "id" TEXT NOT NULL,
    "userConnectionSettingId" TEXT,

    CONSTRAINT "UserConnectionSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharedGame" (
    "id" TEXT NOT NULL,
    "gameState" TEXT,

    CONSTRAINT "SharedGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameSettings" (
    "id" TEXT NOT NULL,
    "cardSettings" TEXT NOT NULL,

    CONSTRAINT "UserGameSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GranularGameSettings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "timed" BOOLEAN NOT NULL,

    CONSTRAINT "GranularGameSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomCards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityCards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Players" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CardList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserConnectionSettings_userConnectionSettingId_key" ON "UserConnectionSettings"("userConnectionSettingId");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomCards_AB_unique" ON "_CustomCards"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomCards_B_index" ON "_CustomCards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityCards_AB_unique" ON "_CommunityCards"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityCards_B_index" ON "_CommunityCards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Players_AB_unique" ON "_Players"("A", "B");

-- CreateIndex
CREATE INDEX "_Players_B_index" ON "_Players"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CardList_AB_unique" ON "_CardList"("A", "B");

-- CreateIndex
CREATE INDEX "_CardList_B_index" ON "_CardList"("B");

-- AddForeignKey
ALTER TABLE "UserConnectionSettings" ADD CONSTRAINT "UserConnectionSettings_userConnectionSettingId_fkey" FOREIGN KEY ("userConnectionSettingId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomCards" ADD CONSTRAINT "_CustomCards_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanechaseCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomCards" ADD CONSTRAINT "_CustomCards_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGameSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityCards" ADD CONSTRAINT "_CommunityCards_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanechaseCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityCards" ADD CONSTRAINT "_CommunityCards_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGameSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players" ADD CONSTRAINT "_Players_A_fkey" FOREIGN KEY ("A") REFERENCES "SharedGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players" ADD CONSTRAINT "_Players_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardList" ADD CONSTRAINT "_CardList_A_fkey" FOREIGN KEY ("A") REFERENCES "GranularGameSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardList" ADD CONSTRAINT "_CardList_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanechaseCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
