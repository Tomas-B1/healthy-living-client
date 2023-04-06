import HomeHeader from "../../Components/HomeHeader/HomeHeader"
import HowItWorks from "../../Components/HowItWorks/HowItWorks"
import "./Home.scss"

function Home() {
    return (
      <section>
        <HomeHeader />
        <main className="home-page">
          <HowItWorks />
        </main>
      </section>
    );
  }
  
  export default Home;