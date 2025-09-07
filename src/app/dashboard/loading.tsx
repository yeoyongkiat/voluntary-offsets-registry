import { Navbar } from "@/components/navbar"
import { GridAnimation } from "@/components/home/GridAnimation"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="h-[calc(100vh-4rem)] pt-16 relative">
        <GridAnimation className="absolute inset-0" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/seeds-logo.png"
              alt="Seeds"
              width={320}
              height={96}
              className="h-16 md:h-20 lg:h-24 w-auto animate-pulse drop-shadow"
            />
            <div className="w-48 md:w-64">
              <Progress />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


