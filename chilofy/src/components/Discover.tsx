import styled from 'styled-components'
import { container, section, colors, card, media } from '../styles/common'

const COMMUNITIES = [
  { title: 'Photography', desc: 'Share your perspective and learn from peers', count: '12k members' },
  { title: 'Fitness', desc: 'Workout buddies and mindful wellness', count: '24k members' },
  { title: 'Food Lovers', desc: 'Discover recipes, restaurants, and local adventures', count: '31k members' },
  { title: 'Travel', desc: 'Discover the world together', count: '18k members' },
]

const Discover = () => {
  return (
    <Wrap id="community">
      <Inner>
        <Head>
          <h2>Discover Your <Brand>Community</Brand></h2>
          <p>Join vibrant communities based on your interests and connect with people who share your passions.</p>
        </Head>
        <Grid>
          {COMMUNITIES.map((c, i) => (
            <Card key={c.title} $i={i}>
              <Badge />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <Small>{c.count}</Small>
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
  max-width: 720px;
  margin: 0 auto 20px;
  color: ${colors.textSecondary};
  h2 { color: ${colors.textPrimary}; margin-bottom: 8px; }
`

const Grid = styled.div`
  display: grid; gap: 16px; grid-template-columns: repeat(4, 1fr);
  @media ${media.lg} { grid-template-columns: repeat(2, 1fr); }
  @media ${media.md} { grid-template-columns: 1fr; }
`

const Card = styled.div<{ $i: number }>`
  ${card}; padding: 18px; text-align: left;
  h3 { margin: 8px 0; }
  p { color: ${colors.textSecondary}; }
  background: ${(p) => {
    const tints = [
      'linear-gradient(180deg, rgba(56,189,248,0.08), #fff)',
      'linear-gradient(180deg, rgba(244,114,182,0.08), #fff)',
      'linear-gradient(180deg, rgba(251,146,60,0.08), #fff)',
      'linear-gradient(180deg, rgba(129,140,248,0.08), #fff)'
    ]
    return tints[p.$i % tints.length]
  }};
`

const Badge = styled.div`
  width: 36px; height: 36px; border-radius: 12px; background: linear-gradient(135deg, #5ac8fa, #6d5df6);
`

const Small = styled.small`
  color: ${colors.textSecondary}; font-weight: 600;
`

const Brand = styled.span`
  color: ${colors.brand};
`

export default Discover