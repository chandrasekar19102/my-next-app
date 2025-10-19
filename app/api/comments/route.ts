import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: return all comments (newest first)
export async function GET() {
  const comments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(comments, { status: 200 });
}

// POST: create a new comment
export async function POST(req: Request) {
  const body = await req.json();

  // Accept either `text` or `texts` to match your Postman habit
  const raw = (body.text ?? body.texts ?? "").toString();
  const text = raw.trim();

  if (!text) {
    return NextResponse.json({ error: "Text is required" }, { status: 400 });
  }

  const created = await prisma.comment.create({
    data: { text },
  });

  return NextResponse.json(created, { status: 201 });
}
