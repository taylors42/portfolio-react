import About from "./components/About";
import Presentation from "./components/Presentation";
import Dash from "./components/Dash"
import Medias from "./components/Medias"
import Experience from "./components/Experience";

function App() {
  return (
  <div className="flex flex-col justify-center">
    <div className="flex my-10 gap-32 justify-between mx-[3rem]
                    max-lg:flex-col 2xl:mx-[10rem] 2xl:my-[4rem]">
      <div className="flex flex-col gap-10 lg:fixed max-lg:items-center">
        <Presentation/>
        <Dash/>
        <Medias/>
      </div>
      <div className="bg-white max-lg:hidden"></div>
      <div className="flex flex-col justify-between max-lg:items-center">
        <About/>
        <Experience year="2018 - 2020" job="Web Development Assistant" description="I assisted in the web area, with Front-end planning of 
          websites and the study of technologies such as JavaScript, Node.js, TypeScript, and React.js, as well as Responsive Design. I also briefly 
          assisted in the marketing area with strategy, data analysis, and result evaluation." />
      </div>
    </div>
  </div>
  );
}

export default App;
