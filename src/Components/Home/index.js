import Header from '../Header'

import {
  BgContainer,
  Container,
  CardImage,
  HomeHeading,
} from './styledComponents'

const Home = () => (
  <BgContainer>
    <Header />
    <Container>
      <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
      <CardImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </Container>
  </BgContainer>
)

export default Home
