import { FcAddDatabase} from "react-icons/fc";
import { Link } from "react-router-dom";

const Navadd = () => {
    return(
        <>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <Link to="/add"><FcAddDatabase/></Link>
            </div>
        </>
    );
}


export default Navadd;