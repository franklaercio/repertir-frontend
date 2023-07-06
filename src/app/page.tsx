"use client";
import { AnimatedOnScroll } from "@/components/AnimetedOnScroll";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState("estudante");
  const users = [
    "professor",
    "aluno",
    "concurseiro",
    "vestibulando",
    "universitário",
    "coordenador",
    "acadêmico",
    "bibliotecário",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setUser(users[(Math.random() * users.length) | 0]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main className="flex h-screen flex-col justify-start">
      <section className="min-h-full p-2">
        <div className="font-sans font-bold text-3xl mt-36 sm:text-4xl">
          <div className="flex flex-row justify-center">
            <div className="mr-3">Todo</div>
            <motion.div
              animate={{ y: [-5, 5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="text-sky-700">{user}</div>
            </motion.div>
          </div>
          <div className="text-center">tem uma aba do repetir aberta</div>
        </div>
        <div className="flex items-start justify-center mt-16 w-full">
          <div className="flex w-full bg-white p-1 rounded shadow-lg md:p-4 lg:w-2/4">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full px-4 py-3 text-md rounded-l items-start bg-slate-200 focus:outline-none"
            />
            <button className="px-1 py-2 bg-sky-700 text-white rounded-r sm:px-6">
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="h-3/5 pb-24 pt-24 min-h-fit border-t-[1px] text-white border-y-zinc-800 bg-blue-950">
        <div className="block max-w-screen-xl m-auto max-sm justify-between sm:flex flex-row p-2">
          <Image
            alt="People working in group"
            src="/footer.svg"
            width={200}
            height={200}
            className="hidden lg:flex"
          />
          <div className="flex flex-col">
            <h3 className="font-bold font-sans text-xl mb-6">
              Impactando a vida de milhares de pessoas
            </h3>
            <h4 className="font-sans">Repetir 2023</h4>
            <h4 className="font-sans">Todos os direitos reservados</h4>
            <AnimatedOnScroll
              id="social-media-container"
              hiddenX={-5}
              hiddenY={0}
            >
              <div className="flex flex-row w-2/3 pt-5 justify-between">
                <Facebook size="25" />
                <Instagram size="25" />
                <Twitter size="25" />
                <Linkedin size="25" />
                <Youtube size="25" />
              </div>
            </AnimatedOnScroll>
          </div>

          <div className="hidden sm:flex flex-col">
            <h3 className="font-sans font-bold text-xl pb-6">Sobre</h3>
            <Link href="#header">Página Inicial</Link>
            <Link href="#functions">Termo de Uso</Link>
            <Link href="#functions">Sobre</Link>
            <Link href="#functions">Política de Privacidade</Link>
            <Link href="#functions">Direitos Autorais</Link>
          </div>

          <div className="hidden sm:flex flex-col">
            <h3 className="font-sans font-bold text-xl pb-6">Dúvidas</h3>
            <Link href="#header">Comunidade</Link>
            <Link href="#functions">Central de Ajuda</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
