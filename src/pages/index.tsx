import Adopted from '@/components/adopted';
import Banner from '@/components/banner';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Form from '@/components/form';
import HowItWorks from '@/components/howItWorks';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className={`flex flex-col items-center ${inter.className}`}>
        <Banner />
        <HowItWorks />
        <Adopted />
        <Faq />
        <div className='flex md:flex-row flex-col justify-between mx-5 w-[87vw]'>
          <p className={'md:w-[30rem] w-full xl:mb-0 mb-6 mr-4'}>
            Inscreva-se em nosso newsletter para receber notícias sobre campanhas,
            eventos e novidades relacionadas a nosso grupo!
          </p>
          <Form />
        </div>
      </main>
      <Footer />
    </>
  )
}
