import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Ao enviar um email, salvar no banco, porem anda nao implementado.
    console.log("[v0] Contact form submission:", {
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({
      message: "Message sent successfully",
      data: { name, email, subject },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
