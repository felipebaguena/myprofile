'use client'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Panel = styled(motion.div)`
  border: 3px solid ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 0 rgba(0,0,0,0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(${({ theme }) => theme.colors.text} 1px, transparent 1px);
    background-size: 4px 4px;
    opacity: 0.1;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 200px;
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const ComicText = styled.p`
  font-family: var(--font-bangers);
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.background},
               2px 2px 0 ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`

const panels = [
    "¡Desarrollando aplicaciones web que rompen la cuarta pared!",
    "¡POW! Transformando ideas en código",
    "¡ZOOM! Optimizando el rendimiento",
    "¡BAM! Creando experiencias únicas",
]

export default function ComicStrip() {
    return (
        <div>
            {panels.map((text, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true })

                return (
                    <Panel
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <ComicText>{text}</ComicText>
                    </Panel>
                )
            })}
        </div>
    )
}