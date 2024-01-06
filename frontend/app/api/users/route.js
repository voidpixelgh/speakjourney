import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const result = await prisma.users.findUnique({
      where: {
        email: body.email,
      },
    });

    if (result) {
      // Email is already in use
      return NextResponse.json(
        {
          success: false,
          message: "Entered Email Already in use!!",
        },
        { status: 400 }
      ); // Bad Request status
    }

    await prisma.users.create({
      data: {
        email: body?.email,
        name: body?.name,
        password: body?.password,
      },
    });

    return NextResponse.json({ message: "Account Successfully Created" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
