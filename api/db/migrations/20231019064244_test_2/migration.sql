-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlanechaseCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "plane" TEXT NOT NULL DEFAULT '',
    "abilityDescription" TEXT NOT NULL DEFAULT '',
    "chaosAbilityDescription" TEXT NOT NULL DEFAULT '',
    "planechaseImageId" TEXT
);
INSERT INTO "new_PlanechaseCard" ("abilityDescription", "chaosAbilityDescription", "id", "plane", "planechaseImageId") SELECT "abilityDescription", "chaosAbilityDescription", "id", "plane", "planechaseImageId" FROM "PlanechaseCard";
DROP TABLE "PlanechaseCard";
ALTER TABLE "new_PlanechaseCard" RENAME TO "PlanechaseCard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
