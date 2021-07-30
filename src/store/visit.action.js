import * as C from './visit.constant'

export const  selectAction = (place) => ({
  type: C.SELECT,
  place
})

export const initListAction = (list) => ({
  type: C.INIT_LIST,
  list
})

export const changeStatusAction = () => ({
  type: C.CHANGE_STATUS,
  
})
