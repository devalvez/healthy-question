/*
  Warnings:

  - Added the required column `role` to the `admins` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MAIN', 'MANANGER');

-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "role" "Role" NOT NULL;
