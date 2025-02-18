"use client"
import { Clock } from "@/components/clock";
import { AnimatedSpan, Terminal } from "@/components/magicui/terminal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-background items-center justify-center h-full overflow-auto">
      {/* Conteúdo Principal com z-index maior */}
      <div className="relative w-full min-h-screen z-10">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Header com Clock em destaque */}
          <header className="py-8 w-full">
            <div className="flex items-center justify-center">
              <div className="size-32 rounded-xl bg-card p-4 shadow-lg">
                <Clock />
              </div>
            </div>
          </header>

          {/* Card Principal */}
          <main className="py-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Image
                    className="rounded-full mb-4 border-4 border-muted"
                    src="https://avatars.githubusercontent.com/FrancisWorld"
                    alt="Francisco de Oliveira Silva"
                    width={120}
                    height={120}
                    priority
                  />
                  <CardTitle className="text-2xl">Francisco de Oliveira Silva</CardTitle>
                  <CardDescription className="text-lg">@FrancisWorld</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Desenvolvedor Full Stack apaixonado por criar experiências web extraordinárias.
                  Fundador do create-chico-app, transformando a maneira como iniciamos projetos Next.js.
                </p>
                <div className="flex gap-4 items-center justify-center mt-8">
                  <Button asChild effect="expandIcon" icon={Github} iconPlacement="left">
                    <a
                      href="https://github.com/FrancisWorld"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </Button>
                  <a
                    href="https://github.com/FrancisWorld/create-chico-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    create-chico-app
                  </a>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Seção de Demonstração do CLI */}
          <section className="py-12 w-full">
            <h2 className="text-xl font-semibold text-center mb-6">Como Usar o create-chico-app</h2>
            <div className="max-w-2xl mx-auto">
              <Terminal>
                <AnimatedSpan delay={100}>$ npx create-chico-app meu-projeto</AnimatedSpan>
                <AnimatedSpan delay={500}>🚀 Bem-vindo ao Create Chico App!</AnimatedSpan>
                <AnimatedSpan delay={1000}>? Qual gerenciador de pacotes você quer usar?</AnimatedSpan>
                <AnimatedSpan delay={1500}>❯ bun</AnimatedSpan>
                <AnimatedSpan delay={1500}>  pnpm</AnimatedSpan>
                <AnimatedSpan delay={1500}>  yarn</AnimatedSpan>
                <AnimatedSpan delay={1500}>  npm</AnimatedSpan>
                <AnimatedSpan delay={2000}>✨ Criando seu projeto incrível...</AnimatedSpan>
                <AnimatedSpan delay={2500}>🎉 Projeto criado com sucesso!</AnimatedSpan>
                <AnimatedSpan delay={3000}>Para começar:</AnimatedSpan>
                <AnimatedSpan delay={3500}>  cd meu-projeto</AnimatedSpan>
                <AnimatedSpan delay={4000}>  bun install</AnimatedSpan>
                <AnimatedSpan delay={4500}>  bun dev</AnimatedSpan>
              </Terminal>
            </div>
          </section>
        </div>
      </div>

      {/* Footer com z-index menor */}
      <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-foreground flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-background">
          <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                <a href="https://github.com/FrancisWorld/create-chico-app" className="text-background/80 hover:text-background">Início</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="https://github.com/FrancisWorld/create-chico-app#documentação" className="text-background/80 hover:text-background">Documentação</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="https://github.com/FrancisWorld/create-chico-app#componentes" className="text-background/80 hover:text-background">Componentes</a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                <a href="https://github.com/FrancisWorld" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background">Github</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="https://instagram.com/franciscof.dev" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background">Instagram</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="https://twitter.com/franciscof_dev" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background">X (Twitter)</a>
              </li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-bold text-background/10">
            chico
          </h2>
        </div>
      </div>
    </div>
  );
}
