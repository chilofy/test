import styled from 'styled-components'
import { container, section, colors, card } from '../styles/common'

const CTA = () => {
  return (
    <Wrap>
      <Inner>
        <h2>Ready to Find Your <Brand>Tribe</Brand>?</h2>
        <p>Join thousands of people who have already found their community and connections on Chilofy. Your next meaningful connection is a tap away.</p>
        <Row>
          <Primary href="#">Create Free Account</Primary>
          <Ghost href="#">Learn More</Ghost>
        </Row>
        <SmallRow>
          <small>100% Secure</small> • <small>No Spam</small> • <small>Easy Onboarding</small>
        </SmallRow>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.section`
  ${section};
  text-align: center;
  background: linear-gradient(180deg, rgba(255,116,198,0.08), rgba(90,200,250,0.08));
`

const Inner = styled.div`
  ${container};
`

const Row = styled.div`
  display: flex; gap: 12px; justify-content: center; margin-top: 16px; flex-wrap: wrap;
`

const Primary = styled.a`
  background: ${colors.brand}; color: white; padding: 12px 16px; border-radius: 12px; font-weight: 700;
`

const Ghost = styled.a`
  ${card}; background: white; padding: 12px 16px; border-radius: 12px; font-weight: 700;
`

const Brand = styled.span`
  color: ${colors.brand};
`
const SmallRow = styled.div`
  margin-top: 10px; color: ${colors.textSecondary};
`
export default CTA