import { prisma } from "@/util/connect";
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/util/auth";

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (session) {
    try {
      return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({
          message: "Exception occurred, please go to contact page!",
        }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({
        message: "Exception occurred, please go to contact page!",
      }),
      { status: 401 }
    );
  }
};
