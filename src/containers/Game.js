import { connect } from 'react-redux'
import App from '../App'
import { moveObjects } from '../actions'



const mapStateToProps = state => {
    console.log('state while mapping state to props', state)
    return { angle: state.angle }
}

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        console.log('position while mapping dispatch', mousePosition)
        dispatch(moveObjects(mousePosition))
    }
})
const Game = connect(mapStateToProps, mapDispatchToProps)(App)

export default Game