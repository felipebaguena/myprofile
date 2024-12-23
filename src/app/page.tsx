'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Hero, { HeroDimensions } from '@/components/sections/Hero'
import HeroLoading from '@/components/ui/HeroLoading'
import ComicStrip from '@/components/sections/ComicStrip'
import MobileLoading from '@/components/ui/MobileLoading'
import { theme } from '@/styles/theme'

const MainContainer = styled.div`
  opacity: 0;
  &.ready {
    opacity: 1;
  }
`

const ContentContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

const StripContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  }
`

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [dimensions, setDimensions] = useState<HeroDimensions | null>(null)
  const [hasMeasured, setHasMeasured] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= parseInt(theme.breakpoints.tablet)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleMeasure = (dims: HeroDimensions) => {
    if (!hasMeasured) {
      setDimensions(dims)
      setHasMeasured(true)
    }
  }

  return (
    <MainContainer className={isReady ? 'ready' : ''}>
      {!hasMeasured && <Hero isHidden onMeasure={handleMeasure} />}
      <AnimatePresence mode={isMobile ? "wait" : "sync"}>
        {dimensions && isLoading ? (
          isMobile ? (
            <MobileLoading
              key="loading"
              onComplete={handleLoadingComplete}
            />
          ) : (
            <HeroLoading
              key="loading"
              onComplete={handleLoadingComplete}
              dimensions={dimensions}
            />
          )
        ) : (
          <ContentContainer
            key="content"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: isMobile ? 0.3 : 0.5,
              delay: isMobile ? 0 : 0.3
            }}
          >
            <Header />
            <Hero />
            <StripContainer>
              <ComicStrip />
            </StripContainer>
          </ContentContainer>
        )}
      </AnimatePresence>
    </MainContainer>
  )
}