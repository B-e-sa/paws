import Adopted from '@/components/adopted';
import Banner from '@/components/banner';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Form from '@/components/form';
import HowItWorks from '@/components/howItWorks';
import Reports from '@/components/reports';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Banner />
      <main className={`flex flex-col items-center ${inter.className}`}>
        <div className='flex flex-col w-screen px-10'>
          <HowItWorks />
          <Adopted />
          <Reports />
          <Faq />
          <Form />
        </div>
      </main>
      <Footer />
    </>
  )
}
