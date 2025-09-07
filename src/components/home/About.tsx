"use client"

import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button" // unused

export function About() {
  return (
    <motion.section
      id="about"
      className="h-screen relative z-10 px-4 lg:px-8 snap-start snap-always flex items-center scroll-mt-16"
      style={{ backgroundColor: "rgb(11, 36, 109)" }}
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 18, mass: 0.6 }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "rgb(253, 181, 21)" }}>
          About
        </h2>
        <p className="text-justify text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto text-pretty">
          <strong>Seeds</strong> is an open-source dashboard application 
          used to explore the data from the Voluntary Offsets Registry 
          Database. It was developed by <a
              href="https://linkedin.com/in/yongkiat"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-current hover:decoration-2"
            >Yeo Yong Kiat </a>
              when he was a 
          student at UC Berkeley's Goldman School of Public Policy, 
          by converting the Excel datasheets provided by the Berkeley 
          Carbon Trading Project into a formal open source database 
          hosted on Supabase. API documentation is also available,
          so aspiring developers can also build their own applications
          off UC Berkeley's open datasets.
        </p>
        <p className="text-justify text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto text-pretty">
          The registry data, developed by the <a
              href="https://gspp.berkeley.edu/berkeley-carbon-trading-project/offsets-database"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-current hover:decoration-2"
            >
              Berkeley Carbon Trading Project
            </a>, 
          contains all carbon offset projects, credit issuances, and 
          credit retirements listed globally by five major voluntary 
          offset project registries—American Carbon Registry (ACR), 
          Climate Action Reserve (CAR), Gold Standard, Verra (VCS) and 
          Architecture for REDD+ Transactions (ART). These five registries 
          generate almost all of the world's voluntary market offsets and 
          also include credits eligible for use under the California / 
          Quebec linked cap-and-trade programs and Washington's cap-and-invest 
          program. 
        </p>
      </div>
    </motion.section>
  )
}


