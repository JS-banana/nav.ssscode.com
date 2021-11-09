import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const siteData = [
  {
    name: '框架',
    desc: '这是个关于“框架”的描述',
    sites: {
      create: [
        {
          name: 'React',
          desc: '渐进式框架',
          detail: 'A JavaScript library for building user interfaces',
          link: 'https://reactjs.org/',
          logo: '',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of siteData) {
    const category = await prisma.category.create({
      data: u,
    });
    console.log(`Created user with id: ${category.id}`);
  }
  console.log(`Seeding finished.`);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
