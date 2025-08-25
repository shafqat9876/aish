import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewLetters from '../components/NewLetters/NewLetters'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollections/>
      <NewLetters/>
    </div>
  )
}

export default Shop
