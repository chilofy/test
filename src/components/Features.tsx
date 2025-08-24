import styled from 'styled-components'
import { container, section, colors, card, media } from '../styles/common'

const FEATURES = [
  { title: 'Smart Matching', desc: 'Our AI-powered algorithm connects you with people who share your interests, values, and vibe for meaningful interactions.' },
  { title: 'Real-time Chat', desc: 'Instant messaging with rich media support, voice notes, and fun reactions to keep conversations dynamic.' },
  { title: 'Social Posts', desc: 'Share your daily moments, thoughts, and experiences with your community through photos, videos, and stories.' },
  { title: 'Safe Environment', desc: 'Advanced moderation and privacy controls help keep your experience safe, respectful, and authentic.' },
  { title: 'Interest Groups', desc: 'Join groups centered on your passions, meet like-minded people, and be part of smart local communities.' },
  { title: 'Events & Meetups', desc: 'Discover curated events and connect in real life to build stronger and more authentic connections.' },
]

const Features = () => {
  return (
    <Wrap id="features">
      <Inner>
        <Head>
          <h2>Everything You Need to <Gradient>Connect</Gradient></h2>
          <p>Chilofy brings together the best features of social networking and dating apps to create authentic connections.</p>
        </Head>
        <Grid>
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <Icon />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Card>
          ))}
        </Grid>
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
  max-width: 760px;
  margin: 0 auto 32px;
  color: ${colors.textSecondary};
  h2 { color: ${colors.textPrimary}; margin: 0 0 8px; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  @media ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${media.md} {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  ${card};
  padding: 20px;
  text-align: left;
  h3 { margin: 8px 0; font-size: 18px; }
  p { color: ${colors.textSecondary}; }
`

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6d5df6, #ff74c6);
`

const Gradient = styled.span`
  background: linear-gradient(90deg, #6d5df6, #ff74c6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default Features