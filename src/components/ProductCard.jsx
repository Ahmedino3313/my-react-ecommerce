import { Link } from "react-router-dom";

function ProductCard ({ product }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-yellow-500 font-bold mt-1">${product.price}</p>

                <Link 
                to={`/products/${product.id}`} className="mt-3 block text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                View Product
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;