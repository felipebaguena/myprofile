'use client'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const ComicPage = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  min-height: calc(100vh - 80px);
  position: relative;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(150px, auto));
  gap: ${({ theme }) => theme.spacing.md};
  max-height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    max-height: none;
  }
`

const Panel = styled.div<{ area?: string }>`
  border: 3px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.spacing.xs};
    left: ${({ theme }) => theme.spacing.xs};
    right: ${({ theme }) => theme.spacing.xs};
    bottom: ${({ theme }) => theme.spacing.xs};
    background-image: radial-gradient(${({ theme }) => theme.colors.text} 1px, transparent 1px);
    background-size: 3px 3px;
    opacity: 0.1;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const ImagePanel = styled(Panel)`
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 1;
    order: 2;
  }
`

const WelcomePanel = styled(Panel)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 3;
    grid-column: auto;
    grid-row: auto;
  }
`

const FinalPanel = styled(Panel)`
  grid-column: 1 / 4;
  grid-row: 3 / 4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 4;
    grid-column: auto;
    grid-row: auto;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const SpeechBubble = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  margin: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: ${({ theme }) => theme.spacing.lg};
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text} transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 23px;
    border-width: 17px 17px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.background} transparent;
  }
`

const Title = styled.h1`
  font-family: var(--font-bangers);
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 ${({ theme }) => theme.colors.background}, 
               3px 3px 0 ${({ theme }) => theme.colors.text};
`

const ComicText = styled.p`
  font-family: var(--font-bangers);
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.background}, 
               2px 2px 0 ${({ theme }) => theme.colors.text};
  text-align: center;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: clamp(1rem, 5vw, 1.8rem);
    letter-spacing: 0.5px;
  }
`

export interface HeroDimensions {
    welcome: DOMRect | null
    image: DOMRect | null
    frontend: DOMRect | null
    backend: DOMRect | null
    final: DOMRect | null
}

export default function Hero({ onMeasure, isHidden = false }: {
    onMeasure?: (dimensions: HeroDimensions) => void
    isHidden?: boolean
}) {
    const welcomeRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const frontendRef = useRef<HTMLDivElement>(null)
    const backendRef = useRef<HTMLDivElement>(null)
    const finalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (onMeasure) {
            const dimensions = {
                welcome: welcomeRef.current?.getBoundingClientRect() || null,
                image: imageRef.current?.getBoundingClientRect() || null,
                frontend: frontendRef.current?.getBoundingClientRect() || null,
                backend: backendRef.current?.getBoundingClientRect() || null,
                final: finalRef.current?.getBoundingClientRect() || null
            }
            onMeasure(dimensions)
        }
    }, [onMeasure])

    return (
        <ComicPage style={{ opacity: isHidden ? 0 : 1, position: isHidden ? 'absolute' : 'relative' }}>
            <GridContainer>
                <WelcomePanel ref={welcomeRef} style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}>
                    <Title>¡HOLA MUNDO!</Title>
                    <ComicText>Soy Felipe, un desarrollador que convierte código en aventuras.</ComicText>
                </WelcomePanel>

                <ImagePanel ref={imageRef} style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}>
                    <StyledImage
                        src="/images/fotocv1.jpg"
                        alt="Felipe Baguena"
                        width={400}
                        height={600}
                        priority
                    />
                </ImagePanel>

                <SkillsContainer>
                    <Panel ref={frontendRef}>
                        <ComicText>FRONTEND</ComicText>
                    </Panel>
                    <Panel ref={backendRef}>
                        <ComicText>BACKEND</ComicText>
                    </Panel>
                </SkillsContainer>

                <FinalPanel ref={finalRef}>
                    <ComicText>¡Creando experiencias web únicas y memorables!</ComicText>
                </FinalPanel>
            </GridContainer>
        </ComicPage>
    )
}
