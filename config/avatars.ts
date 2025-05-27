export const AVATAR_IMAGES = [
  "/avatar/alex.png",
  "/avatar/michael.png",
  "/avatar/sarah.png",
] as const

export function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * AVATAR_IMAGES.length)
  return AVATAR_IMAGES[randomIndex]
}
