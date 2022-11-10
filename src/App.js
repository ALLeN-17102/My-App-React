// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// let name = "Shivam";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
      removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#112152";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "My-App: Home : Darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "Success");
      document.title = "My-App: Home : Lightmode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="My-App"
          aboutText="About My-App"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <TextForm heading="Enter text to analyze" showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>

        {/* <About/> */}

      {/* <Navbar/> */}
</>
    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <img src="" alt="" />
    // <div>
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum totam quis, ad est corporis dolore, reiciendis expedita numquam similique esse fugit, eligendi dignissimos voluptatibus at repellat mollitia ipsam! Eos quae aspernatur itaque praesentium expedita pariatur quisquam, in recusandae quasi minus?</p>
    // </div>
    // </>
    // <div className="blank">Lovely</div>
    // <>
    // <h1>This is me</h1>
    // <div className="App">

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Shivam
    //     </a>
    //   </header>
    // </div>
    // </>
  );
}

export default App;
