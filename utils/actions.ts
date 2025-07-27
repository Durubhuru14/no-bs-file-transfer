"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const VALID_CREDENTIALS = {
  username: "admin",
  password: "password",
};

export async function loginAction(
  prevState: { error: string },
  formData: FormData
) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    username === VALID_CREDENTIALS.username &&
    password === VALID_CREDENTIALS.password
  ) {
    (await cookies()).set("auth", "true", {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: undefined,
    });
    redirect("/files");
  }

  return {
    error: "Invalid username or password.",
  };
}
