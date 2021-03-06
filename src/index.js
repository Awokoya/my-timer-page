import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import DisplayDateTime from './components/timer'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/spinner'



class App extends React.Component {
  state = { lat: null, errorMessage: 'problem detected' }
  

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState ({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div> ;
    }
    
    if (!this.state.errorMessage || this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat} /> ;
    }

    return <Spinner message = "Please accept location request..."/>
  }

  render () {
    return (
      <div className = 'border red'>
        {this.renderContent()}
      </div>
    )
   
}


}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
