export default function GnomeWindow() {
  return (
    <div className=" w-[40rem] h-[30rem] bg-neutral-700 rounded-lg border-neutral-500 border">
      <div className="flex gap-4 text-white items-center align-middle mt-4 ml-4">
        <p className=" bg-red-600 w-4 h-4 rounded-full active:scale-110 duration-100"></p>
        <p className=" bg-yellow-300 w-4 h-4 rounded-full active:scale-110 duration-100"></p>
        <p className=" bg-green-500 w-4 h-4 rounded-full active:scale-110 duration-100"></p>
      </div>
    </div>
  );
}
