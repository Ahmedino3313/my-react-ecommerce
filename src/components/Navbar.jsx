import { Link } from "react-router-dom";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { useCart } from "../CartContext"

function Navbar() {
    const { cart } = useCart();

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
            <Link
                to="/">
                    <h1 className="text-xl font-bold hover:text-yellow-400 flex items-center gap-2">
                        <FaStore />MyStore
                    </h1>
            </Link>
            <div className="flex gap-6 items-center">
                <Link to="/" className="hover:text-yellow-400">Home</Link>
                <Link to="/products" className="hover:text-yellow-400">Products</Link>
                <Link to="/cart" className="relative hover:text-yellow-400 flex items-center gap-1">
                <FaShoppingCart size={20} />
                {totalItems > 0 && (
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                        {totalItems}
                    </span>
                )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;