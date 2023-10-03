import { products } from "./products";
import { categories } from "./categories";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let category of categories) {
    await prisma.product.create({
      data: category,
    });
  }
  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
