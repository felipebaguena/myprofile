'use client'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: ${({ theme }) => theme.spacing.sm};
`

const LoadingSquare = styled(motion.div)`
  width: 100%;
  height: 100%;
  border: 3px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`

const DottedLoadingSquare = styled(LoadingSquare)`
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

export default function MobileLoading({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete()
        }, 1800)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <LoadingContainer
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <GridContainer>
                <LoadingSquare
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0 }}
                />
                <LoadingSquare
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
                <LoadingSquare
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
                <DottedLoadingSquare
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                />
            </GridContainer>
        </LoadingContainer>
    )
}