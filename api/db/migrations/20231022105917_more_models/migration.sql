/*
  Warnings:

  - A unique constraint covering the columns `[userGameSettingsId]` on the table `UserGameSettings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `thirdPartyID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "thirdPartyID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserGameSettings" ADD COLUMN     "userGameSettingsId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserGameSettings_userGameSettingsId_key" ON "UserGameSettings"("userGameSettingsId");

-- AddForeignKey
ALTER TABLE "UserGameSettings" ADD CONSTRAINT "UserGameSettings_userGameSettingsId_fkey" FOREIGN KEY ("userGameSettingsId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
