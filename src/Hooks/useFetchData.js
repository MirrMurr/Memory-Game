import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
  const dispatch = useDispatch()

  useEffect(() => {
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
    shuffle(array)
    setData(array)
  }, [])

  useEffect(() => {
    data.forEach(card => dispatch({ type: 'ADD_CARD', ...card }))
  }, [data])

  return data
}
