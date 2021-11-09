-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "logo" TEXT,
    "likeNum" INTEGER NOT NULL DEFAULT 0,
    "viewNum" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" INTEGER,
    "tagsId" INTEGER,
    CONSTRAINT "Site_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Site_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "Tags" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Site" ("categoryId", "createdAt", "desc", "detail", "id", "likeNum", "link", "logo", "name", "tagsId", "updatedAt", "viewNum") SELECT "categoryId", "createdAt", "desc", "detail", "id", "likeNum", "link", "logo", "name", "tagsId", "updatedAt", "viewNum" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
