import { Prisma as PrismaClient } from '@prisma/client'
import { prisma } from '../src/lib/prisma'

const productsData: PrismaClient.ProductUncheckedCreateInput[] = [
  {
    title: 'Kit essencial para experimentos',
    image:
      'https://media.discordapp.net/attachments/1060695232989102091/1185287957381402754/image.png?ex=658f106e&is=657c9b6e&hm=fd39c62c5e368a955343de066c6775ce96bdf9fe2e2c9cb05eddd087647bab25&=&format=webp&quality=lossless',
    priceCents: 20000,
    score: 9,
  },
  {
    title: 'Kit avançado para experimentos',
    image:
      'https://cdn.discordapp.com/attachments/1060695232989102091/1185287999836127334/image.png?ex=658f1078&is=657c9b78&hm=948f27ddb78cf6cfa262d9db29a3e77870033e9d2e7db5b5e1efa684b160a61c&',
    priceCents: 30000,
    score: 9,
  },
  {
    title: 'Tubo de ensaio',
    image:
      'https://cdn.discordapp.com/attachments/1060695232989102091/1185288047978356837/image.png?ex=658f1084&is=657c9b84&hm=945cb22570c0b28e18db16ad4d2bd773d12fb201c7db371504d9373d2ccb245c&',
    priceCents: 9000,
    score: 9,
  },
]

const main = async () => {
  const products = await prisma.product.createMany({ data: productsData })

  console.log(products)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
