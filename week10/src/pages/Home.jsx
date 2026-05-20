import Header from '../components/Header';
import Hero from '../components/Hero';
import Membership from '../components/Membership';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <Header />
          <Hero />
        </div>
      </section>
      <Membership />
      <Footer />
    </main>
  );
}

export default Home;
