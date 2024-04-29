import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeInput = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="para">Enter the phrase</label>
          <br />
          <input
            placeholder="Enter the phrase"
            type="text"
            className="search-input"
            onChange={this.onChangeInput}
          />
          <p className="count">No.of letters: {count.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
