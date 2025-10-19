import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { error } from "console";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(comment, { status: 200 });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  // ✅ 1️⃣ Validate ID
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  // ✅ 2️⃣ Check if comment exists before deleting
  const existing = await prisma.comment.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  // ✅ 3️⃣ Delete from database
  await prisma.comment.delete({ where: { id } });

  // ✅ 4️⃣ Return success response
  return NextResponse.json(
    { message: "Deleted successfully" },
    { status: 200 }
  );
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    // ✅ Safely read JSON body
    const body = await req.json();

    // ✅ Extract and sanitize text field
    const raw = (body.text ?? body.texts ?? "").toString();
    const text = raw.trim();
    if (!text) {
      return NextResponse.json({ error: "Text required" }, { status: 400 });
    }

    // ✅ Check if record exists
    const existing = await prisma.comment.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // ✅ Update the record
    const updated = await prisma.comment.update({
      where: { id },
      data: { text },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("PUT /api/comments error:", err);
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
