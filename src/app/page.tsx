'use client'
import { useState } from 'react'
import styled from 'styled-components'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ComicStrip from '@/components/sections/ComicStrip'
import HeroLoading from '@/components/ui/HeroLoading'
import { AnimatePresence, motion } from 'framer-motion'

const Main = styled(motion.main)`
  min-height: 100vh;
`

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <AnimatePresence mode="sync">
      {isLoading ? (
        <HeroLoading key="loading" onComplete={handleLoadingComplete} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Main>
            <Hero />
            <ComicStrip />
          </Main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}