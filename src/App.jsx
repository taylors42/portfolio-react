import About from "./components/About";
import Presentation from "./components/Presentation";
import Dash from "./components/Dash"
import Medias from "./components/Medias"
import Experience from "./components/Experience";
import Test from "./components/Test";

function App() {
  return (
    <div className="flex mx-32 my-24 gap-32 max-md:flex-col">
      <div className="flex flex-col gap-10 md:fixed">
        <Presentation/>
        <Dash/>
        <Medias/>
      </div>
        <div className=" lg:ml-[32rem] md:ml-[25rem] xl:ml-[30rem] 2xl:ml-[40rem] duration-500">
          <About/>
            <Experience year="2018 - 2020" job="Web Development Assistant" description="I assisted in the web area, with Front-end planning of 
            websites and the study of technologies such as JavaScript, Node.js, TypeScript, and React.js, as well as Responsive Design. I also briefly 
            assisted in the marketing area with strategy, data analysis, and result evaluation." tech1=""/>
        </div>
    </div>
  );
}

export default App;
