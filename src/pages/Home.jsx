import { Link } from "react-router-dom";
import products from "../products";
import ProductCard from "../components/ProductCard";
import { FaTruck, FaLock, FaUndo, FaStore, FaArrowRight, FaFire } from "react-icons/fa";

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gray-900 text-white min-h-[500px] flex flex-col items-center justify-center text-center px-8">
                <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
                    Welcome to <span className="text-yellow-400 flex items-center gap-2"><FaStore /> MyStore</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mb-8">
                    Discover the latest trends in fashion, accessories and more, Quality products at unbeatable prices.
                </p>
                <Link
                    to="/products"
                    className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors text-lg flex items-center gap-2">
                        Shop Now <FaArrowRight />
                    </Link>
            </div>

            {/* Featured Products */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Featured Products</h2>
                <p className="text-gray-500 text-center mb-8">Handpicked just for you</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {products.slice(0, 3).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        to="/products"
                        className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors font-bold flex items-center gap-2 justify-center max-w-xs mx-auto">
                            View All Products <FaArrowRight />
                        </Link>
                </div>
            </div>

            {/* Banner  */}
            <div className="bg-yellow-400 text-gray-900 py-16 text-center px-8 mt-8">
                <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                    <FaFire /> Summer Sale <FaFire />
                </h2>
                <p className="text-lg mb-6">Up to 50% off on selected items. Limited time only!</p>
                <Link 
                    to="/products"
                    className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors font-bold flex items-center gap-2 justify-center max-w-xs mx-auto">
                        Grab  the Deal <FaArrowRight />
                </Link>
            </div>

            {/* Features  */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 max-w-5xl mx-auto mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow">
                    <FaTruck className="text-4xl text-gray-900 mx-auto mb-3"/>
                    <h3 className="font-bold text-gray-800 text-lg">Free Shipping</h3>
                    <p className="text-gray-500 text-sm mt-1">On all orders above $100</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow">
                    <FaLock className="text-4xl text-gray-900 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 text-lg">Secure Payment</h3>
                    <p className="text-gray-500 text-sm mt-1">100% secure transactions</p>

                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow ">
                    <FaUndo className="text-4xl text-gray-900 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 text-lg">Easy Returns</h3>
                    <p className="text-gray-500 text-sm mt-1">30 day return policy</p>
                </div>
            </div>
        </div>
    );
}

export default Home;