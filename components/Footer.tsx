import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const socialLinks = [
  {
    id: "1",
    title: "Github",
    icon: <FaGithub />,
    url: "https://github.com/Durubhuru14/",
  },
  {
    id: "2",
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/durvesh-more",
  },
  {
    id: "3",
    title: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/durubhuru",
  },
  {
    id: "4",
    title: "Discord",
    icon: <FaDiscord />,
    url: "https://discord.com/users/1016592999234412585",
  },
  {
    id: "5",
    title: "Twitter/X.com",
    icon: <FaSquareXTwitter />,
    url: "https://x.com/durubhuru",
  },
  {
    id: 6,
    title: "Youtube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UC3-OIF4VhSWFk-Dr3FALGHw",
  },
  {
    id: 8,
    title: "E-mail",
    icon: <MdOutlineAlternateEmail />,
    url: "mailto:durveshmore.drm@gmail.com",
  },
];
export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-stone-900 self-end">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              No BS File Transfer 😝
            </span>
          </Link>
          <ul className="flex flex-wrap gap-2 items-center mb-6 text-lg font-medium text-stone-500 sm:mb-0 dark:text-stone-400">
            {socialLinks.map(({ id, icon, title, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${title}`}
                title={`Follow us on ${title}`}
                className="text-2xl md:text-3xl text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-stone-200 sm:mx-auto dark:border-stone-700 lg:my-8" />
        <span className="block text-sm text-stone-500 sm:text-center dark:text-stone-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            No BS File Transfer™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
