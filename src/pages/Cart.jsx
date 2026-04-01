import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();

    return (
        <div className="p-8 max-w-2xl mx-auto w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h1>
                {cart.length === 0 ? (
                    <div className="text-center">
                        <p className="text-gray-500 mb-4">Your cart is empty!</p>
                        <Link to="/products" className="mt-4 inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                            Shop Now
                        </Link>
                    </div>
                ) : (
                
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-white rounded-xl shadow p-4 mb-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h2 className="font-bold text-gray-800">{item.name}</h2>
                                <p className="text-yellow-500 font-bold">${item.price}</p>
                                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                                    Remove
                            </button>
                        </div>
                    ))}
                    <div className="text-right mt-6">
                        <p className="text-xl font-bold text-gray-800">Total: ${getTotal()}</p>
                        <button 
                            onClick={() => navigate("/checkout")}
                            className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                            Checkout
                        </button>
                    </div>
                    
                </>
            )}                
        </div>
    );
}

export default Cart;