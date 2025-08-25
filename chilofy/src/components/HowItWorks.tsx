import styled from 'styled-components'
import { container, section, colors, card, media } from '../styles/common'

const STEPS = [
  { num: 1, title: 'Create Your Profile', desc: 'Set up your profile with photos, interests, and a bio that shows your authentic self to the community.' },
  { num: 2, title: 'Discover People', desc: 'Browse through profiles, join interest groups, and find people who share your passions and lifestyle.' },
  { num: 3, title: 'Start Connecting', desc: 'Send messages, create posts, and meet up at events to build meaningful relationships at your own pace.' },
]

const HowItWorks = () => {
  return (
    <Wrap id="how">
      <Inner>
        <Head>
          <h2>How <Brand>Chilofy</Brand> Works</h2>
          <p>Simple steps to start building meaningful connections and finding your community.</p>
        </Head>
        <Steps>
          {STEPS.map((s) => (
            <Step key={s.num}>
              <Badge>{s.num}</Badge>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Step>
          ))}
        </Steps>
        <Demo>
          <DemoCol>
            <DemoCard>
              <small>Message</small>
              <Row />
              <Row />
              <Row short />
            </DemoCard>
          </DemoCol>
          <DemoCol>
            <DemoCard>
              <small>Feed</small>
              <Row />
              <Row short />
              <Row />
            </DemoCard>
          </DemoCol>
          <DemoCol>
            <DemoCard>
              <small>Discover</small>
              <Row />
              <Row />
              <Row short />
            </DemoCard>
          </DemoCol>
        </Demo>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.section`
  ${section};
  background: linear-gradient(180deg, rgba(109,93,246,0.06), rgba(255,116,198,0.06));
`

const Inner = styled.div`
  ${container};
  text-align: center;
`

const Head = styled.div`
  max-width: 740px;
  margin: 0 auto 28px;
  color: ${colors.textSecondary};
  h2 { color: ${colors.textPrimary}; margin: 0 0 8px; }
`

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  @media ${media.md} {
    grid-template-columns: 1fr;
  }
`

const Step = styled.div`
  ${card};
  text-align: left;
  padding: 18px;
  h3 { margin: 8px 0; }
  p { color: ${colors.textSecondary}; }
  background: linear-gradient(180deg, rgba(255,255,255,1), rgba(109,93,246,0.02));
`

const Badge = styled.div`
  width: 32px; height: 32px; border-radius: 12px; display: grid; place-items: center; font-weight: 800; color: white; background: ${colors.brand};
`

const Demo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 12px;
  @media ${media.md} { grid-template-columns: 1fr; }
`

const DemoCol = styled.div``

const DemoCard = styled.div`
  ${card};
  padding: 16px;
  text-align: left;
  small { color: ${colors.textSecondary}; font-weight: 700; }
`

const Row = styled.div<{ short?: boolean }>`
  height: 12px;
  border-radius: 8px;
  margin-top: 10px;
  width: ${(p) => (p.short ? '50%' : '100%')};
  background: #e2e8f0;
`

const Brand = styled.span`
  color: ${colors.brand};
`

export default HowItWorks