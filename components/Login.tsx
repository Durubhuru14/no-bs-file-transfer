"use client";

import { loginAction } from "@/utils/actions";
import { useActionState, useEffect } from "react";
import { contactAdminMailto, contactAdminGmailLink } from "@/utils/mailToLinks";
import { SiGmail, SiMailboxdotorg } from "react-icons/si";

export default function Login() {
  const [state, formAction] = useActionState(loginAction, { error: "" });
  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-base font-bold leading-tight tracking-tight text-stone-900 dark:text-white">
              Please provide Username and Password provided by admin to access
              files:
            </h1>
            <form className="space-y-4 md:space-y-6" action={formAction}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-stone-50 border border-stone-300 text-stone-900 rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-stone-50 border border-stone-300 text-stone-900 rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                Sign in
              </button>
              <div className="space-y-2">
                <p className="text-sm font-light text-stone-500 dark:text-stone-400">
                  Don’t know the username and password? Contact admin:
                </p>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={contactAdminGmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <SiGmail />
                      <span> Gmail</span>
                    </div>
                  </a>
                  <a
                    href={contactAdminMailto}
                    className="flex-1 text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <SiMailboxdotorg />
                      <span>Mail</span>
                    </div>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
