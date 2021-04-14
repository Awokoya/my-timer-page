// import DisplayDateTime from './components/timer'
// import SeasonDisplay from './components/SeasonDisplay'
// import Spinner from './components/spinner'
// import './App.css';
// import { ReactComponent } from '*.svg';

// class App extends React.Component {
//   state = { lat: null, errorMessage: 'problem detected' }

//   componentDidMount () {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState ({ lat: position.coords.latitude }),
//       err => this.setState({ errorMessage: err.message })
//     );
//   }

//   render () {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div> Error: {this.state.errorMessage} </div> ;
//     }
    
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat = {this.state.lat} /> ;
//     }

//     return <Spinner/>
//   }

// }





// function App() {
//   return (
//     <div className="App">
//      <h1> Hey There</h1>
//      <DisplayDateTime/>
//     </div>
//   );
// }

// export default App;


