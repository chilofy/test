import styled from 'styled-components'
import { container, section, colors, card, media } from '../styles/common'

const Devices = () => {
  return (
    <Wrap>
      <Inner>
        <Left>
          <h2>Experience Chilofy on <Brand>Any Device</Brand></h2>
          <p>Seamlessly switch between your phone, tablet, and computer. Your conversations and connections are always in sync.</p>
          <List>
            <li>Mobile First</li>
            <li>Desktop Power</li>
            <li>Real-time Sync</li>
          </List>
          <StoreRow>
            <Store>App Store</Store>
            <Store>Google Play</Store>
          </StoreRow>
        </Left>
        <Right>
          <Phone>
            <Screen>
              <Row />
              <Row short />
              <Row />
            </Screen>
          </Phone>
          <Laptop>
            <Screen>
              <Row />
              <Row />
              <Row short />
            </Screen>
          </Laptop>
        </Right>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.section`
  ${section};
  background: linear-gradient(135deg, rgba(25,25,98,1) 0%, rgba(33,14,74,1) 100%);
  color: ${colors.white};
`

const Inner = styled.div`
  ${container}; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center;
  @media ${media.lg} { grid-template-columns: 1fr; }
`

const Left = styled.div`
  h2 { margin: 0 0 8px; }
  p { color: rgba(255,255,255,0.8); }
`

const List = styled.ul`
  margin: 14px 0; padding-left: 18px; color: rgba(255,255,255,0.9);
`

const StoreRow = styled.div`
  display: flex; gap: 12px;
`

const Store = styled.div`
  ${card}; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: ${colors.white}; padding: 10px 14px; border-radius: 10px;
`

const Right = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; justify-items: center;
  @media ${media.md} { grid-template-columns: 1fr; }
`

const Phone = styled.div`
  ${card}; width: 200px; height: 380px; border-radius: 28px; background: #0f1225; border-color: #2b2f59; display: grid; place-items: center;
`

const Laptop = styled.div`
  ${card}; width: 360px; height: 240px; border-radius: 16px; background: #0f1225; border-color: #2b2f59; display: grid; place-items: center;
`

const Screen = styled.div`
  width: 80%;
`

const Row = styled.div<{ short?: boolean }>`
  height: 10px; border-radius: 8px; background: #2b2f59; margin: 10px 0; width: ${(p) => (p.short ? '50%' : '100%')};
`

const Brand = styled.span`
  color: ${colors.accentBlue};
`

export default Devices