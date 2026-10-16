import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Home from '@/src/components/Home Page/Home';
import TagManagerLoader from '@/src/components/TagManager/TagManagerLoader';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Web Development & Software Solutions | The Tech Makers',
  description: 'The Tech Makers builds websites, web and mobile applications, custom software, and digital solutions for growing businesses.',
  alternates: { canonical: '/' },
};

export default function Page() {

  return (
    <div>
      <TagManagerLoader />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
