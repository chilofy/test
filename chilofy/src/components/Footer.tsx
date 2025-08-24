import styled from 'styled-components'
import { container } from '../styles/common'

const Footer = () => {
  return (
    <Wrap as="footer">
      <Inner>
        <Top>
          <Col>
            <Brand>Chilofy</Brand>
            <Small>Connect, chat, and find your perfect vibe. Join real communities and share your interests and ideas.</Small>
          </Col>
          <Col>
            <Head>Product</Head>
            <Link href="#features">Features</Link>
            <Link href="#community">Community</Link>
            <Link href="#">Mobile App</Link>
          </Col>
          <Col>
            <Head>Company</Head>
            <Link href="#">About</Link>
            <Link href="#">Stories</Link>
            <Link href="#">Privacy</Link>
          </Col>
          <Col>
            <Head>Support</Head>
            <Link href="#">Help Center</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Report Issue</Link>
          </Col>
        </Top>
        <Bottom>
          <small>© {new Date().getFullYear()} Chilofy. All rights reserved.</small>
          <Links>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </Links>
        </Bottom>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #0b1220;
  color: rgba(255,255,255,0.9);
`

const Inner = styled.div`
  ${container};
  padding: 40px 24px;
`

const Top = styled.div`
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 18px; margin-bottom: 18px;
  @media (max-width: 768px) { grid-template-columns: 1fr 1fr; }
`

const Col = styled.div``

const Brand = styled.div`
  font-weight: 800; font-size: 20px; letter-spacing: -0.02em;
`

const Small = styled.p`
  color: rgba(255,255,255,0.75);
`

const Head = styled.div`
  font-weight: 700; margin-bottom: 8px;
`

const Link = styled.a`
  display: block; color: rgba(255,255,255,0.85); margin: 6px 0; &:hover{ color: white; }
`

const Bottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: space-between; padding-top: 12px; color: rgba(255,255,255,0.7);
`

const Links = styled.div`
  display: flex; gap: 12px;
`

export default Footer