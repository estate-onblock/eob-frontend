import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

const Nfts: Nft[] = [
  {
    name: 'Thailand SNFT',
    description: 'These bunnies love nothing more than swapping pancakes. Especially on BSC.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
    previewImage: 'thai.png',
    blurImage: '',
    sortOrder: 999,
    bunnyId: 0,
  },
  {
    name: 'France SNFT',
    description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
    previewImage: 'france.png',
    blurImage: '',
    sortOrder: 999,
    bunnyId: 1,
  },
  {
    name: 'United State SNFT',
    description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
    previewImage: 'usa.png',
    blurImage: '',
    sortOrder: 999,
    bunnyId: 2,
  },
  {
    name: 'Japan SNFT',
    description: "Love makes the world go 'round... but so do pancakes. And these bunnies know it.",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png',
    previewImage: 'japan.png',
    blurImage: '',
    sortOrder: 999,
    bunnyId: 3,
  },
  {
    name: 'United State SNFT',
    description: 'It’s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png',
    previewImage: 'usa2.png',
    blurImage: '',
    sortOrder: 999,
    bunnyId: 4,
  },
]

export default Nfts
