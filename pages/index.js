import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import Main from '../components/Main';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="main-page">
    <NavBar/>
    {/* <Main/> */}
  </div>
  )
}
