import FilesTable from "@/components/FilesTable";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function FileDisplay() {
  const auth = (await cookies()).get("auth");

  if (auth?.value !== "true") {
    redirect("/");
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-8">
      <h1 className="text-2xl md:text-3xl mb-4">.\File Index</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <FilesTable />
      </div>
    </div>
  );
}
