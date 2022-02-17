import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  await prisma.user.create({
    data: {
      name: 'Test',
      email: 'hello@prisma.com',
      image: 'imageurl.com',
      createdAt: new Date().toISOString(),
    },
  })

  const allUsers = await prisma.user.findMany()
  console.dir(allUsers, { depth: null })
}
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })