import Hero from '../components/Hero';
import Team from '../components/Team'
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      <Services />
      <ContactForm />
    </div>
  );
}