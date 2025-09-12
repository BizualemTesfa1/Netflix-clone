import React from 'react'
import Headder from '../components/header/Headder'
import Banner from '../components/banner/Banner'
import RowList from '../components/rows/rowList/Rowlist'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
        <Headder />
        <Banner />
        <RowList/>
        <Footer />
    </>
  )
}

export default Home