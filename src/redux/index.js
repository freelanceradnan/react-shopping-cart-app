import { createStore } from 'redux'
import { cardReducer } from '../reducer/card'

export const store = createStore(cardReducer)


