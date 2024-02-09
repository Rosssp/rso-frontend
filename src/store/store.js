import { configureStore } from '@reduxjs/toolkit'

import ModalReducer from './modal/modalReducer'
import userReducer from './user/userReducer'
import selectorsReducer from './selectors/selectorsReducer'

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    user: userReducer,
    selector: selectorsReducer,
  }
})
