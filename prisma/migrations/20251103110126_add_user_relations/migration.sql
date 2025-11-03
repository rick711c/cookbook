/*
  Warnings:

  - You are about to drop the column `text` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `avatarUrl` on the `User` table. All the data in the column will be lost.
  - Added the required column `content` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Comment" DROP COLUMN "text",
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "avatarUrl";
