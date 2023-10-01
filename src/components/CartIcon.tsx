"use client";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import cartData from "../../assets/cart.json";
import styled from "styled-components";

const CartIconWrapper = styled.div`
  margin-left: 12px;
  display: flex;
  height: 100%;
  justify-self: center;
  align-items: center;
  gap: 6px;
`;

const CartContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const StyledLottie = styled(Lottie)`
  width: 36px;
  height: 36px;
`;

const CartIcon = () => {
  return (
    <Link href="/cart">
      <CartIconWrapper>
        <CartContent>
          <StyledLottie animationData={cartData} />
          <p>Cart (3)</p>
        </CartContent>
      </CartIconWrapper>
    </Link>
  );
};

export default CartIcon;
