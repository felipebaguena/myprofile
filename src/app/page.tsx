'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Hero, { HeroDimensions } from '@/components/sections/Hero'
import HeroLoading from '@/components/ui/HeroLoading'
import ComicStrip from '@/components/sections/ComicStrip'
import MobileLoading from '@/components/ui/MobileLoading'

const MainContainer = styled.div`
  opacity: 0;
  &.ready {
    opacity: 1;
  }
`

const ContentContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
`

const StripContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [dimensions, setDimensions] = useState<HeroDimensions | null>(null)
  const [hasMeasured, setHasMeasured] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

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