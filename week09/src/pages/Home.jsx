import "./Home.css";
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
    return (
        <div>
            <div className="home-wrapper">
                <Header />
                <Hero />
            </div>
        </div>
    )
}

export default Home;
