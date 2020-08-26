import { images } from 'Images/images'

export const swap = (arr, a, b) => {
  const c = arr[a]
  arr[a] = arr[b]
  arr[b] = c
}

export const random = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 1; --i) {
    swap(arr, random(0, i), i)
  }
}

export const init = () => {
  let id = 1
  let alt = 1
  const array = images.map((img, index) => {
    return {
      id: id++,
      img: img,
      alt: index % 2 === 0 ? alt : alt++,
      flipped: false,
      found: false
    }
  })

  // shuffle(array)
  return array
}
