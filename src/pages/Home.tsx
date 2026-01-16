import Hero from '../components/Hero';
import About from '../components/About';
// import Values from '../components/Values';
import Philosophy from '../components/Philosophy';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#f5f3e8]">
      <Hero onNavigate={onNavigate} />
      <About />
      {/* <Values /> */}
      <Philosophy />
    </div>
  );
}
