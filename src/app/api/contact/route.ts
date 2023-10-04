import { NextResponse } from "next/server";

export const POST = () => {
  return new NextResponse("Success", { status: 200 });
};
