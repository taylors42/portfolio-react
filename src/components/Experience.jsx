function Experience ({year, job, description, tech1, tech2, tech3})  {
    return (
    <div className="flex hover:bg-slate-600/[0.5] duration-500 p-5 rounded-md
                    my-6 max-md:flex-col max-lg:w-screen items-center lg:items-center">
        <div className="flex md:gap-10 max-md:gap-5 max-md:flex-col">
            <div className="flex max-lg:justify-center">
                <p className="text-white/[0.7] bg-transparent"> {year} </p>
            </div>
            <div className=" text-sm text-white 2xl:w-[30rem] xl:w-[26rem] lg:w-[20rem] md:w-[15rem] ">
                <p className="text-xl text-white mb-3 "> {job} </p>
                <p className="text-white max-md:text-center max-lg:w-[20rem] 2xl:text-lg"> {description} </p>
            </div>
        </div>
    </div>
    )
}

export default Experience;