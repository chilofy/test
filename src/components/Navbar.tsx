import styled from 'styled-components'
import { container, colors } from '../styles/common'

const Navbar = () => {
  return (
    <Bar>
      <Inner>
        <Brand>Chilofy</Brand>
        <Actions>
          {/* <Link href="#features">Features</Link>
          <Link href="#how">How it Works</Link>
          <Link href="#community">Community</Link> */}
          <Button>Get Started</Button>
        </Actions>
      </Inner>
    </Bar>
  )
}

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
`

const Inner = styled.div`
  ${container};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`

const Brand = styled.div`
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: ${colors.textPrimary};
`

const Actions = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`

// const Link = styled.a`
//   color: ${colors.textSecondary};
//   font-weight: 500;
//   &:hover { color: ${colors.textPrimary}; }
// `

const Button = styled.a`
  background: ${colors.brand};
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
`

export default Navbar;
