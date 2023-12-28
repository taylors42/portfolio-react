import About from "./components/About";
import Presentation from "./components/Presentation";
import Dash from "./components/Dash"
import Medias from "./components/Medias"
import Experience from "./components/Experience";
import AboutPage from "./components/AboutPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <div className="flex flex-col justify-center">
          <div className="flex my-10 gap-32 justify-between mx-[3rem]
                    max-lg:flex-col 2xl:mx-[10rem] 2xl:my-[4rem]">
            <div className="flex flex-col gap-10 lg:fixed max-lg:items-center">
              <Presentation/>
              <Dash/>
              <Medias/>
            </div>
              <div className="bg-white max-lg:hidden">
              </div>
                <div className="flex flex-col justify-between max-lg:items-center">
                  <About/>
                    <Experience year="2023" job="Front-end Developer Jr." description="I assisted in the web area, with Front-end planning of 
                      websites and the study of technologies such as JavaScript, Node.js, TypeScript, and React.js, as well as Responsive Design. I also briefly 
                      assisted in the marketing area with strategy, data analysis, and result evaluation." />
                    <Experience year="2018 2019" job="Tech Assistant " description="I performed several functions, from customer service 
                      to assistance in Technical maintenance, management and control of orders with Excel, also helping to resolve technical 
                      problems with both hardware and software." />
                </div>
            </div>
          </div>
      </Route>
      <Route path="/aboutpage">
        <AboutPage/>
        <Link to="/" className="text-white flex justify-center animate-pulse">
        <p> click here to return for the home page</p>
        </Link>
      </Route>
      <Route path="/*">
        <div className="text-9xl text-white flex justify-center mt-[13rem] animate-bounce">
          404
        </div>
        <Link to="/" className="text-white flex justify-center animate-pulse">
        <p> click here to return for the home page</p>
        </Link>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
