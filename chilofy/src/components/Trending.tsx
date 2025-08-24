import styled from 'styled-components'
import { container, section, colors, card } from '../styles/common'

const Trending = () => {
  return (
    <Wrap>
      <Inner>
        <h3>Trending Posts</h3>
        <Feed>
          <Post>
            <Avatar />
            <Content>
              <Row width="50%" />
              <Text>Just discovered an amazing coffee shop downtown. Who wants to join me here this weekend?</Text>
              <Meta>
                <small>1hr ago</small> • <small>120 comments</small> • <small>500+ likes</small>
              </Meta>
            </Content>
          </Post>
          <Post>
            <Avatar pink />
            <Content>
              <Row width="60%" />
              <Text>I’ve started my first marathon today! Thanks y’all for words of support through this journey. Looking for running partners for next month.</Text>
              <Meta>
                <small>2hr ago</small> • <small>20 comments</small> • <small>300+ likes</small>
              </Meta>
            </Content>
          </Post>
        </Feed>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.section`
  ${section};
  padding-top: 16px;
`

const Inner = styled.div`
  ${container};
`

const Feed = styled.div`
  ${card};
  padding: 18px;
  background: white;
`

const Post = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  & + & { margin-top: 18px; }
`

const Avatar = styled.div<{ pink?: boolean }>`
  width: 48px; height: 48px; border-radius: 14px; background: ${(p) => (p.pink ? 'linear-gradient(135deg,#ff74c6,#ffb36b)' : 'linear-gradient(135deg,#6d5df6,#5ac8fa)')};
`

const Content = styled.div``

const Row = styled.div<{ width: string }>`
  height: 12px; width: ${(p) => p.width}; background: #e2e8f0; border-radius: 8px; margin-bottom: 8px;
`

const Text = styled.p`
  color: ${colors.textSecondary}; margin: 8px 0;
`

const Meta = styled.div`
  color: ${colors.textSecondary};
`

export default Trending