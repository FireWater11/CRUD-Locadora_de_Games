-- CreateTable
CREATE TABLE "games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "plataform" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true
);
