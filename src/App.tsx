import { useEffect } from 'react';
import { useThemeStore } from "./stores/useThemeStore"
import Header from './components/header/HeaderPart';
import Hero from './components/hero/Hero';
import Service from './components/services/Service';
import Solutions from './components/services/Solutions';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import SideBar from './components/sidebar/SideBar';
import { Toaster } from 'react-hot-toast';
import Contact from './components/contact/Contact';

const App = () => {
  const { isDark } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="app min-h-screen max-w-screen overflow-x-hidden flex flex-col bg-neutral-50 dark:bg-neutral-950">
      <Toaster reverseOrder={false} position='bottom-left' />
      <SideBar />
      <Header />
      <Hero />
      <About />
      <Service />
      <Solutions />
      <Reviews />

      {/* contact  */}
      <Contact />
      {/* footer  */}
      <Footer />
    </div>
  )
}

export default App