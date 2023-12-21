function Experience ({year, job, description, tech1, tech2, tech3})  {
    return (
    <div className="flex hover:bg-slate-900/[0.5] duration-500 p-5 rounded-md my-6 max-md:flex-col">
        <div className="flex md:gap-10 max-md:gap-5 max-md:flex-col">
            <div className="flex">
                <p className="text-white/[0.7] bg-transparent"> {year} </p>
            </div>
                <div className=" text-sm text-white lg:w-[24rem] lg:mb-4 md:w-[20rem] ml-10 2xl:w-[15rem]">
                    <p className="text-xl text-white mb-3 "> {job} </p>
                    <p className="text-white max-md:text-center w-[25rem] "> {description} </p>
                </div>
            </div>
                <p className="text-white text-sky-400 rounded-full inline p-2 text-sm ml-[10rem] ">{tech1}</p>
                <p className="text-white text-sky-400 rounded-full inline p-2 text-sm ml-[2rem] ">{tech2}</p>
                <p className="text-white text-sky-400 rounded-full inline p-2 text-sm ml-[2rem] ">{tech3}</p>
        </div>
    )
}

export default Experience;