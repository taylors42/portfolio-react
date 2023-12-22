function Presentation () {
    return (
        <div className="flex flex-col w-96 gap-2 text-white max-lg:text-center
                         duration-500 hover:bg-slate-800/[0.5] rounded
                         hover:scale-105 p-3 cursor-pointer
                         ">
            <h1 className="text-6xl font-bold">Taylor Souza</h1>
            <h2 className="text-3xl font-light">Front-end Developer</h2>
            <p className="italic font-light text-white/[0.7] 2xl:text-lg animate-pulse">That's my place where I keep my codes, ideas and repositories that I like.</p>
        </div>
    )
}
export default Presentation;