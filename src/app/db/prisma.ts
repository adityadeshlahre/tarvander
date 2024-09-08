import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  // Prevent multiple instances of PrismaClient in development
  // In production, it's fine to have it just as `let prisma: PrismaClient`
  var prismaClient: PrismaClient | undefined;
}

// Only create a new PrismaClient if it doesn't already exist
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }
  prisma = global.prismaClient;
}

export default prisma;
