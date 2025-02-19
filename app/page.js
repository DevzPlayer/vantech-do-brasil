import Head from 'next/head';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="vRitRtVPNJZBgrM_vn8hGKviBf1bMXHJVhOMAhFCYXA" />
      </Head>
      <div>
        <Hero />
        <Team />
        <Services />
        <ContactForm />
      </div>
    </>
  );
}
