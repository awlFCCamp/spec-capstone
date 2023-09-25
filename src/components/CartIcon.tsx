import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex item-center gap-4">
      <div className="relative w-8 h-7">
        <Image src="/cart.png" alt="cart image" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
