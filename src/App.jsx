import Avatar from "./components/Avatar";
import Menu from "./components/Menu";
import GnomeWindow from "./components/GnomeWindow";

function App() {
  return (
    <div className=" my-8 mx-8 flex flex-col select-none justify-center">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="h-14 w-14">
            <Avatar />
          </div>
          <div className=" ml-[0.7rem]">
            <h2 className=" text-white font-bold">Taylor S</h2>
            <p className="text-white/70 font-light -mt-1 ">Programador Web</p>
          </div>
        </div>
        <div className="">
          <Menu />
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div></div>
        <GnomeWindow />
        <div></div>
      </div>
    </div>
  );
}

export default App;
