
import { Inter } from '@next/font/google'
import Header from './../Components/Header/Header';
import Banner from './../Components/Banner';
import HowWeAreDifferent from './../Components/HowWeAreDifferent';
import ConnectWithUs from "../Components/ConnectWithUs";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HowWeAreDifferent />
      <ConnectWithUs />
      <Footer/>
    </>
  )
}
