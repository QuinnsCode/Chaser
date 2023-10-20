-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "PlanechaseImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "encodedString" TEXT NOT NULL DEFAULT '',
    "planechaseCardId" TEXT,
    CONSTRAINT "PlanechaseImage_planechaseCardId_fkey" FOREIGN KEY ("planechaseCardId") REFERENCES "PlanechaseCard" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlanechaseCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "plane" TEXT NOT NULL DEFAULT '',
    "abilityDescription" TEXT NOT NULL DEFAULT '',
    "chaosAbilityDescription" TEXT NOT NULL DEFAULT '',
    "planechaseImageId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PlanechaseImage_planechaseCardId_key" ON "PlanechaseImage"("planechaseCardId");
