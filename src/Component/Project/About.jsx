import React from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:'center',p:3,
      '& p':{
        textAlign:'justify',
      }
    }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Indulge your palate with mouth-watering food at My Resturant in
          Kolkata. This fine dining restaurant serves food round the clock in a
          wide spread of Indian as well as global cuisines in their menu. Savour
          their Signature mornings breakfast focussing on healthy breakfast
          options including eggs. Benedict cooked in extra virgin olive oil
          hollandaise with cold pressed juices called ‘pavilion pure’ made with
          interesting combinations of fresh fruits and vegetables. The
          ingredients and spices are very fresh. The ingredients are home grown
          in their own kitchen garden or are fresh local produce. Enjoy various
          food festivals held from time to time at Eden Pavilion where
          speciality chef curate food belonging to different regions of India.
          The á la carte menu crafted by professional chef is very extensive
          including North Indian, Italian, Continental, Bengali and South Indian
          cuisines. The restaurant offers lavish spread of buffet as well as á
          la carte to the diners. The presentation is very attractive with
          dishes from across the globe. Savour Thin crust pizza and croissants
          with delicious Coffee sip hazelnut. Do not miss South Indian breakfast
          platter, yummy White Sauce Carbonara pasta. Wholesome Mutton Biriyani
          is amazing as the chunks of mutton are tender. Some Bengali food
          dishes such as Prawn Malaikari, Bashonti pulao, Bhapa maach taste
          excellent Starters such as Fish and Chips and Crispy Chicken are worth
          trying Chicken babycord soup is amazing. The main course includes
          Malai chingri , delicious Chicken Tikka Masala, Hunan Mutton chicken
          fried rice ,mixed noodles, Kosha Mangsho, which melts inside the mouth
          with Naan. The desserts such as Mishti Doi, Chocolate Walnut Fudge are
          mind-blowing and tempting making you drool and are a must try. The
          service is prompt and efficient. Rightly placed in luxurious ITC Sonar
          located at J.B.S. Haldane Avenue, E.M. Bypass, Science City Area,
          Kolkata the interiors of My Resturant exhibit elegant interiors and a
          welcoming aura. The indoor seating area with Wifi, is quite spacious
          and comfortable with soft music playing in the background. Book a
          table with us to enjoy the luxurious dining experience amidst awesome
          ambience at My Resturent.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
