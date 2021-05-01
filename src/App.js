import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  return (
  	<>
  		<Particles 
  			className="particles-canvas"
  			params={{
  				particles: {
  					number: {
  						value: 40,
  						density: {
  							enable: true,
  							value_area: 900,
  						}
  					},
  					shape: {
  						type: "square",
  						stroke: {
  							width: 6,
  							color: '#ef4035'
  						}
  					}
  				}
  			}}
  		/>
	  	<Navbar />
	  	<Header />
  	</>
  );
}

export default App;
