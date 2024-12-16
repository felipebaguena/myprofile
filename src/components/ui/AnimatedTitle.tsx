import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledTitle = styled(motion.h1)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const AnimatedTitle = () => {
    return (
        <StyledTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Bienvenido a mi Portfolio
        </StyledTitle>
    )
}
