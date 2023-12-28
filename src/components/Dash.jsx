import resume from '../resources/taylorResume.pdf';
function Dash () {
    return (
        <ul className=" flex md:flex-col max-md:items-center max-md:justify-center text-white lg:mt-14 gap-3 duration-500 max-lg:text-xl max-lg:text-center 2xl:text-xl">
            <li className=" duration-500 hover:scale-105 hover:font-semibold cursor-pointer">
                <a href="AboutPage">About</a>
                </li>
            <li className=" duration-500 hover:scale-105 hover:font-semibold cursor-pointer">
            <a href={resume} target="_blank" rel="noopener noreferrer">Experience</a></li>
            <li className=" duration-500 hover:scale-105 hover:font-semibold cursor-pointer">
            <a href="https://github.com/taylors42" target="_blank" rel="noopener noreferrer">Projects</a></li>
        </ul>
    )
}
export default Dash;