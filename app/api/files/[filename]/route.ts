import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
<<<<<<< HEAD
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
=======
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
>>>>>>> 63bb175 (Fixed dynamic route (api/files/[filename]) type issue)
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
