import styled from 'styled-components'
import { container, section, colors, card } from '../styles/common'

const Hero = () => {
  return (
    <Wrap>
      <Inner>
        <Left>
          <Eyebrow>Find Your</Eyebrow>
          <Title>
            Perfect <Accent>Vibe</Accent>
          </Title>
          <Subtitle>
            Connect with like‑minded people, share your moments, and build meaningful relationships in a space designed for authentic connections.
          </Subtitle>
          <Ctas>
            <Primary href="#">Download App</Primary>
            <Ghost href="#">Watch Demo</Ghost>
          </Ctas>
          <Meta>
            <small>200k+ Users</small>
            <Dot />
            <small>4.8 Rating</small>
            <Dot />
            <small>Safe & Secure</small>
          </Meta>
        </Left>
        <Right>
          <Mock>
            <CardTitle>Chilofy</CardTitle>
            <CardBody>
              <Bubble />
              <Line width="70%" />
              <Line width="52%" />
            </CardBody>
            <FooterRow>
              <Line width="40%" />
            </FooterRow>
          </Mock>
        </Right>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.section`
  ${section};
`

const Inner = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div``

const Eyebrow = styled.div`
  font-weight: 800;
  color: ${colors.textPrimary};
  letter-spacing: 0.02em;
`

const Title = styled.h1`
  margin: 8px 0 16px;
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`

const Accent = styled.span`
  background: linear-gradient(90deg, #6d5df6, #ff74c6, #5ac8fa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.p`
  color: ${colors.textSecondary};
  max-width: 560px;
`

const Ctas = styled.div`
  display: flex;
  gap: 12px;
  margin: 20px 0 10px;
`

const Primary = styled.a`
  background: ${colors.brand};
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 700;
`

const Ghost = styled.a`
  background: white;
  color: ${colors.textPrimary};
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 700;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.textSecondary};
`

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background: #cbd5e1;
  border-radius: 50%;
  display: inline-block;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
`

const Mock = styled.div`
  ${card};
  width: 320px;
  border-radius: 18px;
  padding: 16px;
`

const CardTitle = styled.div`
  font-weight: 700;
  color: ${colors.textSecondary};
`

const CardBody = styled.div`
  padding: 12px 0 16px;
  display: grid;
  gap: 8px;
`

const Bubble = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #5ac8fa, #6d5df6);
`

const Line = styled.div<{ width: string }>`
  height: 10px;
  width: ${(p) => p.width};
  border-radius: 6px;
  background: #e2e8f0;
`

const FooterRow = styled.div`
  display: flex;
  gap: 8px;
`

export default Hero