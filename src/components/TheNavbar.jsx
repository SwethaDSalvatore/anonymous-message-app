import { Link } from "react-router-dom";

const TheNavbar = () => {
    return <div className="bg-[#7B2869] p-2  sm:px-10 sm:py-5 flex items-center justify-between">
        <h4 className="font-semibold sm:text-xl text-sm text-white">Swetha Blog</h4>
        <ul className="flex space-x-4">
            <li className="text-white sm:text-base text-sm hover:text-slate-400"><Link to={'./'}>Home</Link></li>
            <li className="text-white sm:text-base text-sm hover:text-slate-400"><Link to={"./about"}>About</Link></li>
            <li className="text-white sm:text-base text-sm hover:text-slate-400" ><Link to={"./contact"}>Contact</Link></li>
        </ul>
    </div>
}

export default TheNavbar