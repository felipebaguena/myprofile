'use client'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-family: var(--font-bangers);
  font-size: 1rem;
  letter-spacing: 1px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid ${({ theme }) => theme.colors.text};
      transform: skew(-2deg);
    }

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background-image: radial-gradient(${({ theme }) => theme.colors.text} 1px, transparent 1px);
      background-size: 3px 3px;
      opacity: 0.1;
      transform: skew(-2deg);
    }
  }
`

export default function Header() {
    return (
        <Nav>
            <Container>
                <NavLinks>
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/about">Sobre mí</NavLink>
                    <NavLink href="/projects">Proyectos</NavLink>
                    <NavLink href="/contact">Contacto</NavLink>
                </NavLinks>
            </Container>
        </Nav>
    )
}