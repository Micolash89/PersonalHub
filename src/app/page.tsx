import FooterLink from "@/components/FooterLink";
import LinkSocial from "@/components/LinkSocial";
import { inter } from "@/lib/font";
import Image from "next/image";

export default function Home() {
  const arrLinks = [
    {
      name: "GitHub",
      link: "#",
    },
    {
      name: "Frontend Mentor",
      link: "#",
    },
    {
      name: "LinkedIn",
      link: "#",
    },
    {
      name: "Twitter",
      link: "#",
    },
    {
      name: "Instagram",
      link: "#",
    },
  ];

  return (
    <>
      <main
        className={`rounded-lg ${inter.className} text-sm min-w-96 w-full sm:w-auto bg-neutral-800 m-auto  flex flex-col gap-5 items-center justify-center  p-10 `}
      >
        <Image
          width={75}
          height={75}
          src="/images/avatar-jessica.jpeg"
          alt="Jessica Randall"
          className="rounded-full object-cover"
        />

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl font-bold text-white">Jessica Randall</h1>

          <h2 className="text-lime-300">London, United Kingdom</h2>
        </div>

        <h3 className="text-neutral-400 mt-2">
          {'"Front-end developer and avid reader."'}
        </h3>

        <nav className="flex flex-col gap-4 w-full">
          {arrLinks.map((link, index) => (
            <LinkSocial key={index} name={link.name} reference={link.link} />
          ))}
        </nav>
      </main>
      <FooterLink />
    </>
  );
}
