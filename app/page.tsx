import Login from "@/components/Login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const auth = (await cookies()).get("auth");
  if (auth?.value === "true") {
    return redirect("/files");
  }
  return (
    <>
      <header className="my-2 md:my-5 text-center">
        <h1 className="text-3xl md:text-5xl">No BS File Transfer 😝</h1>
        <p className="mt-2 text-sm md:text-base underline underline-offset-6">
          Transfer files without worrying of creating account or storage :)
        </p>
      </header>
      <main className="mt-4">
        <Login />
      </main>
    </>
  );
}
