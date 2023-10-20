-- CreateTable
CREATE TABLE "UserExample" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanechaseImage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "encodedString" TEXT NOT NULL DEFAULT '',
    "planechaseCardId" TEXT,

    CONSTRAINT "PlanechaseImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanechaseCard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "plane" TEXT NOT NULL DEFAULT '',
    "abilityDescription" TEXT NOT NULL DEFAULT '',
    "chaosAbilityDescription" TEXT NOT NULL DEFAULT '',
    "planechaseImageId" TEXT,

    CONSTRAINT "PlanechaseCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PlanechaseImage_planechaseCardId_key" ON "PlanechaseImage"("planechaseCardId");

-- AddForeignKey
ALTER TABLE "PlanechaseImage" ADD CONSTRAINT "PlanechaseImage_planechaseCardId_fkey" FOREIGN KEY ("planechaseCardId") REFERENCES "PlanechaseCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
