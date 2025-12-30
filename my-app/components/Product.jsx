import { useCart } from "@/context/CartContext";

export default function Product() {
  const productData = {
    id: 2,
    name: "cacao butter",
    description: "good for skin",
    price: 100,
  };

  const { addToCart } = useCart();

  return (
    <div>
      <h4>{productData.name}</h4>
      <button
        onClick={() => addToCart(productData)}
        className="p-2 bg-green-400"
      >
        Add to Cart
      </button>
    </div>
  );
}
