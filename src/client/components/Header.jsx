import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const { currentUser } = useSelector((state) => state.user);

    return (
        <header className="bg-slate-200 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
                <Link to="/" className="flex items-center gap-2">
                    <h1 className="font-extrabold text-xl sm:text-2xl">
                        <span className="text-blue-700">EARNSHARE</span>
                        <span className="text-orange-500">AI</span>
                    </h1>
                </Link>
                <form className="bg-white p-2 rounded-lg flex items-center shadow-sm">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-20 sm:w-48 text-gray-700 placeholder-gray-400"
                    />
                    <button type="submit" className="text-slate-600">
                        <FaSearch />
                    </button>
                </form>
                <nav>
                    <ul className="flex items-center gap-4">
                        {currentUser ? (
                            <>
                                <Link to="/dashboard" className="text-sm sm:text-base text-gray-700 hover:underline">
                                    Dashboard
                                </Link>
                                <Link to="/aitools" className="text-sm sm:text-base text-gray-700 hover:underline">
                                    AI Tools
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" className="hidden sm:inline text-sm sm:text-base text-gray-700 hover:underline">
                                    Home
                                </Link>
                                <Link to="/pricing" className="hidden sm:inline text-sm sm:text-base text-gray-700 hover:underline">
                                    Pricing
                                </Link>
                                <Link to="/about" className="hidden sm:inline text-sm sm:text-base text-gray-700 hover:underline">
                                    About
                                </Link>
                            </>
                        )}
                        <Link to="/profile" className="flex items-center">
                            {currentUser ? (
                                <img
                                    src={currentUser.avatar}
                                    alt="User Avatar"
                                    className="rounded-full h-8 w-8 object-cover border-2 border-gray-300"
                                />
                            ) : (
                                <span className="text-sm sm:text-base text-gray-700 hover:underline">Sign In</span>
                            )}
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
