import styled from 'styled-components'
import { container, section, colors, card, media } from '../styles/common'

const TESTIMONIALS = [
  { name: 'Sarah M.', text: 'I’ve met some incredible people on Chilofy! The vibe is more authentic and supportive than any other app I’ve used.', kpi: 'Active User' },
  { name: 'Mike T.', text: 'The matching algorithm actually works. I’ve been networking to form genuine communities in my city.', kpi: 'Connections Made' },
  { name: 'Emma L.', text: 'Love the group features and local meetups! The events have helped me expand my social circle.', kpi: 'Satisfaction Rate' },
]

const KPIS = [
  { label: 'Active Users', value: '50k+' },
  { label: 'Messages Sent', value: '1M+' },
  { label: 'Connections Made', value: '25k+' },
  { label: 'Satisfaction Rate', value: '98%' },
]

const Testimonials = () => {
  return (
    <Wrap>
      <Inner>
        <Head>
          <h2>Join Thousands of <Brand>Happy Users</Brand></h2>
          <p>Real stories from our vibrant community</p>
        </Head>
        <Grid>
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <Avatar />
              <Name>{t.name}</Name>
              <Text>{t.text}</Text>
              <Small>{t.kpi}</Small>
            </Card>
          ))}
        </Grid>
        <Kpis>
          {KPIS.map((k) => (
            <KpiCard key={k.label}>
              <KpiValue>{k.value}</KpiValue>
              <KpiLabel>{k.label}</KpiLabel>
            </KpiCard>
          ))}
        </Kpis>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.section`
  ${section};
`

const Inner = styled.div`
  ${container};
  text-align: center;
`

const Head = styled.div`
  max-width: 700px;
  margin: 0 auto 24px;
  color: ${colors.textSecondary};
  h2 { color: ${colors.textPrimary}; margin: 0 0 6px; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media ${media.md} { grid-template-columns: 1fr; }
`

const Card = styled.div`
  ${card};
  padding: 18px;
  text-align: left;
`

const Avatar = styled.div`
  width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #ff74c6, #6d5df6);
`

const Name = styled.div`
  margin-top: 8px; font-weight: 700;
`

const Text = styled.p`
  color: ${colors.textSecondary};
`

const Small = styled.small`
  color: ${colors.textSecondary}; font-weight: 600;
`

const Kpis = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 18px;
  @media ${media.md} { grid-template-columns: repeat(2, 1fr); }
`

const KpiCard = styled.div`
  ${card}; padding: 16px; text-align: center;
`

const KpiValue = styled.div`
  font-weight: 800; font-size: 22px;
`

const KpiLabel = styled.div`
  color: ${colors.textSecondary};
`

const Brand = styled.span`
  color: ${colors.brand};
`

export default Testimonials