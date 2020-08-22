import { useState, useEffect } from 'react'

import { images } from 'Images/images'

const swap = (arr, a, b) => {
  const c = arr[a]
  arr[a] = arr[b]
  arr[b] = c
}

const random = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 1; --i) {
    swap(arr, random(0, i), i)
  }
}

export const useFetchData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const array = []
    let id = 1
    for (let i = 0; i < 10; ++i) {
      const img = images[i]
      array.push({ id: id++, img: img, alt: i, flipped: false })
      array.push({ id: id++, img: img, alt: i, flipped: false })
    }
    shuffle(array)
    setData(array)
  }, [])

  return data
}
