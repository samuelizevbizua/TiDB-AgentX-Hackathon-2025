import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-8 sm:p-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/20 absolute top-[-10rem] left-1/2 h-[26rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <main className="mx-auto w-full max-w-3xl text-center">
        <div className="text-muted-foreground/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
          TiDB AgentX Hackathon 2025
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Build intelligent database agents
        </h1>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base">
          Ship AI-powered workflows on TiDB with a modern developer experience. Minimal, fast, and
          ready to hack.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-primary text-primary-foreground shadow-sm hover:opacity-90 rounded-2xl">
            <Link href="#get-started">
              Get started
            </Link>
          </Button>
          <Button asChild variant="outline" className="hover:bg-accent hover:text-accent-foreground">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              View GitHub
            </Link>
          </Button>
        </div>

        <div className="text-muted-foreground/70 mt-10 text-xs">
          Powered by TiDB + Next.js + Tailwind CSS
        </div>
      </main>
    </div>
  )
}
