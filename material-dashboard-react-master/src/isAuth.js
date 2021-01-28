import React from 'react'
import store from "store"

function isAuth(){
    const state = store.getState()
    if(state) return state.isAuth
    return false
}

export default isAuth

