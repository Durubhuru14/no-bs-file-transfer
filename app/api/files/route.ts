import { readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { formatBytes } from "@/utils/formatBytes";
import dayjs from "dayjs";

export async function GET() {
  const folder = join(process.cwd(), "/download");
  try {
    const files = readdirSync(folder).map((file) => {
      const fullPath = join(folder, file);
      const stats = statSync(fullPath);
      return {
        name: file.replace(extname(file), ""),
        extension: extname(file),
        size: formatBytes(stats.size),
        lastModified: dayjs(stats.mtime).format("DD MMMM YYYY, hh:mm A"),
        url: `/api/files/${file}`,
      };
    });

    return Response.json(files);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Failed to read files" }, { status: 500 });
  }
}
