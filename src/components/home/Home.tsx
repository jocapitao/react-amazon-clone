import React from "react";

import HomeRow from "./homerow/HomeRow";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src={
            "https://images-eu.ssl-images-amazon.com/images/G/02/digital/" +
            "video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVID" +
            "UPDATE__XSite_1500x" +
            "600_PV_en-GB._CB428684220_.jpg"
          }
        />
        <HomeRow
          products={[
            {
              id: "1234",
              title: "The Lean Startup",
              price: 19.99,
              rating: 1,
              imageUrl:
                "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
            },
            {
              id: "12345",
              title: "Casque de jeu pour PC PS4, son stéréo Surround Casque de jeu avec microphone antibruit, contrôle du volume, lumières LED pour Xbox One, PS5, ordinateurs portables, Mac…",
              price: 35.99,
              rating: 3,
              imageUrl:
                "https://images-na.ssl-images-amazon.com/images/I/718HNiWU9LL._AC_UL320_SR302,320_.jpg",
            },
          ]}
        />
        <HomeRow
          products={[
            {
              id: "69",
              title: "Fire TV Stick 4K avec la toute nouvelle télécommande vocale Alexa, lecteur multimédia de diffusion en continu",
              price: 69.99,
              rating: 5,
              imageUrl:
                "https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg",
            },
            {
              id: "420",
              title: "Crayola Super Tips Marqueurs lavables 100 carats, 100 carats, en vrac, coloriage adulte, fournitures scolaires et artisanales, cadeau de dessin pour...",
              price: 16.64,
              rating: 2,
              imageUrl:
                "https://images-na.ssl-images-amazon.com/images/I/71q8i5V%2B2QL._AC_SL1500_.jpg",
            },
            {
              id: "69420",
              title: "Kindle Paperwhite, maintenant résistant à l'eau et avec deux fois plus d'espace de stockage",
              price: 139.99,
              rating: 4,
              imageUrl:
                "https://m.media-amazon.com/images/I/61eAq6gg-XL._AC_UL320_.jpg",
            },
          ]}
        />
        <HomeRow
          products={[
            {
              id: "4204204230",
              title: "EVGA GeForce RTX 3090 FTW3 Ultra Gaming, 24 Go GDDR6X, technologie iCX3, LED ARGB, plaque arrière en métal, 24G-P5-3987-KR",
              price: 9000,
              rating: 5,
              imageUrl:"https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_UY218_.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
