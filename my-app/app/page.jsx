// export default function Home() {
//   return (
//     <header style={{backgroundColor: "gold", color: "black", padding: "1rem"}}>
//       <h1>
//         Welcome to my next.js app
//       </h1>
//     </header>
//   )
// }

import Container from "@/components/container"
import Header from "@/components/header"
import ProfileCard from "@/components/profile-card"

const Home = () => {
  return (
    <Container>
      <Header/>
      <ProfileCard name="Abebe" age={25} avatar="img1.jpg"/>
      <ProfileCard name="Biruk" age={50} avatar="img2.jpg"/>
    </Container>
  )
}
export default Home

// props- inputs to components to make them dynamic. they are read only