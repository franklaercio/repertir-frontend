import Link from "next/link";
import { SignInButton } from "../SignInButton";
import Logo from "../Logo/index";

export function Header() {
  return (
    <header className="bg-blue-950 justify-center">
      <div className="flex flex-row max-w-screen-xl m-auto justify-between p-3">
        <div className="flex flex-row items-center text-slate-200 justify-between">
          <Logo />
          <nav className="hidden w-3/4 font-sans text-md select-none md:block lg:block">
            <Link href="/" className="pr-10">
              Página Inicial
            </Link>
            <Link href="/suggestion/create" className="pr-10">
              Enviar questão
            </Link>
            <Link href="/about">Sobre</Link>
          </nav>
        </div>
        <SignInButton />
      </div>
    </header>
  );
}
