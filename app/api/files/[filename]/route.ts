import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readFile, stat } from "fs/promises";
import path from "path";

type ParamsType = {
  filename: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<ParamsType> }
) {
  const { filename } = await params;
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");
  if (auth?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const filePath = path.join(process.cwd(), "download", filename);
  try {
    await stat(filePath);
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
