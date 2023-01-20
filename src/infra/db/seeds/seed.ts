import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.types.create({
    data: {
      name: "spent",
    },
  });
  await prisma.types.create({
    data: {
      name: "expense",
    },
  });
  await prisma.types.create({
    data: {
      name: "urgency",
    },
  });

  await prisma.types.create({
    data: {
      name: "gain",
    },
  });
}
try {
  main();
  console.log(`[DB] Database has been populated`);
} catch (error: any) {
  console.error(`[DB] ${error.message}`);
}
