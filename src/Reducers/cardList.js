import { card } from 'Reducers/card'
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

const init = () => {
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
  return array
}

export const cardList = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CARDS':
      return init()
    case 'ADD_CARD':
      return [
        ...state,
        card(undefined, action)
      ]
    case 'FLIP_CARD':
    case 'FLIP_BACK':
    case 'FOUND_CARD':
    case 'RESET':
      return state.map(c => card(c, action))
    default:
      return state
  }
}
