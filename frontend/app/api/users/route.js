import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await prisma.users.create({
      data: {
        email: body?.email,
        name: body?.name,
        password: body?.password,
      },
    });

    return NextResponse.json({ message: "Account Successfully Created" });
  } catch (error) {
    return NextResponse.json({ message: "something went Wrong" });
  }
}
