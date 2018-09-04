const React = require('react')
const ReactDOM = require('react-dom')
const propTypes = require('prop-types')
import { ProgressBar, Button, Provider } from 'rendition'
// require ('./styles/_progress-button.scss')

class ProgressButton extends React.Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      openBar: false
    }
  }

  handleClick () {
   this.setState({ openBar: true })
  }

  render () {
    if (this.state.openBar) {
      return (
        <Provider>
          <Bar/>
        </Provider>
      )
    }
    else {
      return (
        <Provider>
          <Button primary className='flash-button' onClick={this.handleClick}>
            Click!
          </Button>
        </Provider>
      )
    }
  }
}

class Bar extends React.Component {

  constructor () {
    super()
  }


  render () {
    return (
      <Provider>
        <ProgressBar emphasized>
          %
        </ProgressBar>
      </Provider>
    );
  }
}


module.exports = ProgressButton
