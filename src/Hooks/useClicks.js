export const useClicks = () => {
  let c = 0
  window.addEventListener('click', () => {
    console.log('hello')
    c++
  })

  return c
}
