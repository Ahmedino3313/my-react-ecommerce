import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import { useCart } from "../CartContext";

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === Number(id));
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    function handleAddToCart() {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    }

    if (!product) {
        return <h1 className="p-8 text-red-500">Product not found!</h1>;
    }

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <img 
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl mb-6" 
            />
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 mt-1">{product.category}</p>
            <p className="text-yellow-500 font-bold text-2xl mt-2">${product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>

            <div className="flex items-center gap-3 mt-6">
                <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}
                    className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold ">
                        -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}
                    className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold">
                        +
                </button>
            </div>
            <div className="flex items-center gap-4 mt-6">
                <button onClick={handleAddToCart} 
                    className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                    Add to Cart
                </button>
                {added && <p className="text-green-500 font-bold">Added to cart!</p>}
            </div>
        </div>
    );

}

export default ProductDetail;