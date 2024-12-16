'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ComicStrip from '@/components/sections/ComicStrip'
import Loading from '@/components/ui/Loading'

const Main = styled.main`
  min-height: 100vh;
`

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Ajusta este tiempo según necesites

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <ComicStrip />
      </Main>
    </>
  )
}