import { prisma } from '../src/lib/prisma'
async function seed() {
  await prisma.event.create({
    data: {
      id: '7df34060-9e0e-46d2-803c-a104688f38f3',
      title: 'Unite Summit NLW',
      slug: 'unite-summit-nlw',
      details: 'the best event in the world',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})