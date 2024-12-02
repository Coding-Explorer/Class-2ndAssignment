import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Hero from '../app/components/Hero';

// Here i'm using the functional component to render the header, hero and footer components.
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;