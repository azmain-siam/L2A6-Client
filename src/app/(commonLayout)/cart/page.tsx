import CartItems from "@/components/modules/Cart/CartItems";
import { getCurrentUser } from "@/services/AuthService";
import { getCartItems } from "@/services/CartService";

const CartPage = async () => {
  const user = await getCurrentUser();

  const { data } = await getCartItems(user.id);
  const cartItems = data?.items;
  return (
    <div className="container max-w-7xl mx-auto py-5">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <CartItems cartItems={cartItems} />
        {/* Order Summary */}
        {/* {cartItems && cartItems.length > 0 && ( */}

        {/* )} */}
      </div>
    </div>
  );
};

export default CartPage;
