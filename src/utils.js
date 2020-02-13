import { adjectives, nouns } from "./words"

export const generateSecret = () => {
  console.log(adjectives.length)
  const randomNumber = Math.floor(Math.random() * adjectives.length)
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
}