import FooterLink from "@/components/FooterLink";
import NavigationLinks from "@/components/NavigationLinks";
import { inter } from "@/lib/font";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className={`rounded-lg ${inter.className} text-sm min-w-96 w-full sm:w-auto bg-neutral-800 m-auto  flex flex-col gap-5 items-center justify-center  p-10 `}
      >
        <Image
          width={75}
          height={75}
          src="/images/profile-pic.png"
          alt="Avatar Perfil"
          className="rounded-full object-cover"
        />

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl font-bold text-white">
            Espindola Javier Nicolas
          </h1>

          <h2 className="text-neutral-300">Full Stack Developer</h2>
        </div>

        <h3 className="text-neutral-400 mt-2">
          {'"The best way to predict the future is to create it."'}
        </h3>

        <NavigationLinks />
      </main>
      <FooterLink />
    </>
  );
}
