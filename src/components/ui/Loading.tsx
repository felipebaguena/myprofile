'use client'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const LoadingText = styled.h2`
  font-family: var(--font-bangers);
  font-size: 2rem;
  color: black;
  text-transform: uppercase;
`

export default function Loading() {
    return (
        <LoadingContainer>
            <LoadingText>Cargando...</LoadingText>
        </LoadingContainer>
    )
}