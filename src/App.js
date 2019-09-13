import React from 'react';
import PropTypes from 'prop-types'
import Canvas from './components/Canvas'
import { getCanvasPosition } from './utils/formula'

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const self = this
    // setInterval(() => {
    //   self.props.moveObjects(self.canvaMousePosition)
    // }, 10);
  }


  trackMouse = (event) => {
    // event.preventDefault()
    this.canvaMousePosition = getCanvasPosition(event)
    this.props.moveObjects(this.canvaMousePosition)
  }



  render() {
    return (
      <div className="App">
        <Canvas angle={this.props.angle} trackMouse={event => this.trackMouse(event)} />

      </div>
    );
  }
}

App.propTypes = {

  moveObjects: PropTypes.func.isRequired,
}
export default App;