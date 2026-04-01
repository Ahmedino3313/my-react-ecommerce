import products from "../products";
import  ProductCard from "../components/ProductCard";

function Products() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map ((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;