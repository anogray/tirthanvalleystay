import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

export default function Home() {




  return (
    <>
    <Head>
    <meta name="google-site-verification" content="sC67vD_yE2XXipIp7olx6Jw-AnCzcC_nwinfTmbgrfQ" />
    </Head>
    <div className="main-page">
    <NavBar/>
  </div>
  </>
  )
}
