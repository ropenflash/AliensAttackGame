import { calculateAngle } from '../utils/formula'


export default (state, action) => {
    if (!action.mousePosition) return state
    const { x, y } = action.mousePosition
    const angle = calculateAngle(0, 0, x, y)

    let newState = { ...state, angle }
    console.log('newState is', newState)
    return newState
}
