import Avatar from "./components/Avatar";
import Menu from "./components/Menu";
import GnomeWindow from "./components/GnomeWindow";

function App() {
  return (
    <div className=" my-8 mx-8 flex flex-col select-none justify-center">
      <div className="flex justify-between bg-neutral-500/20 rounded-xl p-2 items-center mb-4 shadow-lg shadow-black/40 max-sm:justify-center">
        <div className="flex items-center ">
          <div className="h-14 w-14">
            <Avatar />
          </div>
          <div className=" ml-[0.7rem]">
            <h2 className=" text-white font-bold">Taylor S</h2>
            <p className="text-white/70 font-light -mt-1 ">Programador Web</p>
          </div>
        </div>
        <div className=" max-sm:hidden">
          <Menu />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4">
        <div className=" bg-black max-h-[30rem] max-w-[20rem]"></div>
        <div className=" bg-white max-h-[30rem] max-w-[60rem] min-w-[20rem]"></div>
      </div>
    </div>
  );
}

export default App;
