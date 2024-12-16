'use client'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-family: var(--font-bangers);
  font-size: 1rem;
  letter-spacing: 1px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export default function Header() {
    return (
        <Nav>
            <NavLinks>
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/about">Sobre mí</NavLink>
                <NavLink href="/projects">Proyectos</NavLink>
                <NavLink href="/contact">Contacto</NavLink>
            </NavLinks>
        </Nav>
    )
}