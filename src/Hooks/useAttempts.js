import store from 'Stores/appStore'

export const useAttempts = () => {
  return store.getState().attempts
}
