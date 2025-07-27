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
<<<<<<< HEAD
=======
    console.log(error);
>>>>>>> 63bb175 (Fixed dynamic route (api/files/[filename]) type issue)
    return Response.json({ error: "Failed to read files" }, { status: 500 });
  }
}
