import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import DescriptionLeft from './DescriptionLeft';
import DescriptionRight from './DescriptionRight';
import FeaturedItems from './FeaturedItems';
import Categories from './Categories';
import Sellers from './Sellers';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Section />
      <DescriptionLeft 
        title="What is Depop"
        text="Depop is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like."
        button="Get started"
        image="https://d3170a3msf25m.cloudfront.net/assets/home-phones-2@2x.jpg"
      />
      <DescriptionRight />
      <Categories />
      <FeaturedItems />      
      <DescriptionLeft 
        title="Sell your way"
        text="Sell a few items or build your empire. Whatever your vibe we’ll share our pro tips to help you get there. It's simple to get started."
        button="Sell on Depop"
        image="https://d3170a3msf25m.cloudfront.net/assets/narrative/homepage-narrative-seller@2x.jpg"
      />
      <Sellers />
      <Footer />
    </div>
  );
}

export default App;
