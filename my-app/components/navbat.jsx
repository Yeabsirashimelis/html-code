import { useCart } from "@/context/CartContext";

export default function NavBar() {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <nav>
      <h3>my shop</h3>
      <p>
        Cart Items: {cartItems[0].name}, {"     "} {cartItems[0].price},{" "}
        {"      "}
        {cartItems[0].description}
      </p>
    </nav>
  );
}
