import { useState, useEffect } from 'react'
import { images } from 'Images/images'
import store from 'Stores/appStore'

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
    for (let i = 0; i < images.length; ++i) {
      const img = images[i]
      array.push({ id: id++, img: img, alt: i, flipped: false, found: false })
      array.push({ id: id++, img: img, alt: i, flipped: false, found: false })
    }
    shuffle(array)
    setData(array)
  }, [])

  useEffect(() => {
    data.forEach(card => {
      store.dispatch({ type: 'ADD_CARD', ...card })
    })
  }, [data])

  return data
}
