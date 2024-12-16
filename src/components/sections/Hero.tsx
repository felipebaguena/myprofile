'use client'
import styled from 'styled-components'
import Image from 'next/image'

const ComicPage = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 80px);
  position: relative;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const Panel = styled.div<{ area?: string }>`
  border: 3px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;

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
`

export default function Hero() {
    return (
        <ComicPage>
            <WelcomePanel style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}>
                <SpeechBubble>
                    <Title>¡HOLA MUNDO!</Title>
                    <p>Soy Felipe, un desarrollador que convierte código en aventuras.</p>
                </SpeechBubble>
            </WelcomePanel>

            <ImagePanel style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}>
                <StyledImage
                    src="/images/fotocv1.jpg"
                    alt="Felipe Baguena"
                    width={400}
                    height={600}
                    priority
                />
            </ImagePanel>

            <SkillsContainer>
                <Panel>
                    <ComicText>FRONTEND</ComicText>
                </Panel>
                <Panel>
                    <ComicText>BACKEND</ComicText>
                </Panel>
            </SkillsContainer>

            <FinalPanel>
                <SpeechBubble>
                    <p>¡Creando experiencias web únicas y memorables!</p>
                </SpeechBubble>
            </FinalPanel>
        </ComicPage>
    )
}
