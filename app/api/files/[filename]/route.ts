import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import path from "path";
import { createReadStream } from "fs";
import { stat } from "fs/promises";

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const auth = (await cookies()).get("auth");
  if (auth?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const filePath = path.join(process.cwd(), "download", params.filename);
  try {
    await stat(filePath);
    const stream = createReadStream(filePath);

    return new NextResponse(stream as any, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${params.filename}"`,
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
