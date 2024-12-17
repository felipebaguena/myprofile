'use client'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { HeroDimensions } from '../sections/Hero'

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(150px, auto));
  gap: ${({ theme }) => theme.spacing.md};
  max-height: 80vh;
  width: calc(100% - ${({ theme }) => theme.spacing.lg});
  padding: ${({ theme }) => theme.spacing.md};
`

const LoadingPanel = styled(motion.div)`
  border: 3px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(${({ theme }) => theme.colors.text} 1.5px, transparent 1.5px);
    background-size: 4px 4px;
    opacity: 0.2;
  }
`

export default function HeroLoading({
    onComplete,
    dimensions
}: {
    onComplete: () => void
    dimensions: HeroDimensions
}) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete()
        }, 2200)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <LoadingContainer
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container>
                <GridContainer>
                    <LoadingPanel
                        style={{
                            gridColumn: isMobile ? '1 / 4' : '1 / 3',
                            gridRow: '1 / 2',
                            width: dimensions.welcome?.width,
                            height: dimensions.welcome?.height,
                            order: isMobile ? 1 : undefined
                        }}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                    <LoadingPanel
                        style={{
                            gridColumn: isMobile ? '1 / 4' : '3 / 4',
                            gridRow: isMobile ? '2 / 3' : '1 / 3',
                            width: dimensions.image?.width,
                            height: dimensions.image?.height,
                            order: isMobile ? 2 : undefined
                        }}
                        initial={{ x: isMobile ? 0 : 100, y: isMobile ? 50 : 0, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    <LoadingPanel
                        style={{ gridColumn: '1 / 2', gridRow: '2 / 3' }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    />
                    <LoadingPanel
                        style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    <LoadingPanel
                        style={{ gridColumn: '1 / 4', gridRow: '3 / 4' }}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    />
                </GridContainer>
            </Container>
        </LoadingContainer>
    )
}