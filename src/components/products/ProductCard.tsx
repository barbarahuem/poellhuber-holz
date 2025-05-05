export default function ProductCard({ product }: { product: any }) {
    return (
        <div className="flex flex-col items-center justify-center w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <span className="mt-2 text-lg font-bold text-gray-800">{product.price} €</span>
        </div>
    );
    }