import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const { currentUser } = useSelector((state) => state.user);


    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-blue-700">EARNSHARE</span>
                        <span className="text-orange-500">AI</span>
                    </h1>
                </Link>
                <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input type="text" placeholder="search..." className="bg-transparent focus:outline-none w-16 sm:w-48" />
                    <FaSearch className="text-slate-600" />
                </form>
                <ul className="flex gap-4">
                    {currentUser ? (
                        <>
                            <Link to="/dashboard">
                                <li className="text-xs sm:text-sm md:text-base lg:text-lg sm:text-slate-700 hover:underline">Dashboard</li>
                            </Link>
                            <Link to="/aitools">
                                <li className="text-xs sm:text-sm md:text-base lg:text-lg sm:text-slate-700 hover:underline">AI Tools</li>
                            </Link>
                            
                        </>
                    ) : (
                        <>
                            <Link to="/">
                                <li className="hidden sm:inline text-xs sm:text-sm md:text-base lg:text-lg sm:text-slate-700 hover:underline">Home</li>
                            </Link>
                            <Link to="/pricing">
                                <li className="hidden sm:inline text-xs sm:text-sm md:text-base lg:text-lg sm:text-slate-700 hover:underline">Pricing</li>
                            </Link>
                            <Link to="/about">
                                <li className="hidden sm:inline text-xs sm:text-sm md:text-base lg:text-lg sm:text-slate-700 hover:underline">About</li>
                            </Link>
                        </>
                    )}
                    <Link to="/profile">
                        {currentUser ? (
                            <img
                                src={currentUser.avatar}
                                alt="avatar"
                                className="rounded-full h-7 w-7 object-cover"
                            />
                        ) : (
                            <li className="text-xs sm:text-sm md:text-base lg:text-lg sm:text-slate-700 hover:underline">Sign In</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header