import { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function Checkout() {
    const { cart, getTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        clearCart();
    }

    if (submitted) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-8">
                <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed!</h1>
                <p className="text-gray-500 mb-6">Thank you {form.name}! Your order is on its way.</p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-gray-900 text-white px-8py-3 rounded-full hover:bg-yellow-400 Hover:text-gray-900 transition-colors font-bold">
                        Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Order Summary  */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 bg-white rounded-xl shadow p-3 mb-3">
                            <img src={item.image} alt={item.name} className="w-16 object-cover rounded-lg" />
                            <div className="flex-1">
                                <p className="font-bold text-gray-800">{item.name}</p>
                                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                            </div>
                            <p className="text-yellow-500 font-bold">${item.price * item.quantity}</p>
                        </div>
                    ))}
                    <div className="text-right mt-4">
                        <p className="text-xl font-bold text-gray-800">Total: ${getTotal()}</p>
                    </div>
                </div>

                {/* Shipping Form  */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-900" 
                        />
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-900"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-900"
                        />
                        <div className="flex gap-4">
                            <input 
                                type="text"
                                name="city"
                                placeholder="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-900 w-full"                            
                            />
                            <input 
                                type="text"
                                name="zip"
                                placeholder="ZIP code"
                                value={form.zip}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-900 w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gray-900 text-white py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors font-bold mt-2">
                                Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;