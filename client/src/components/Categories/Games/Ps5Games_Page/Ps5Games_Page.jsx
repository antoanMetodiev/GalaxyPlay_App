import React, { useState, useEffect } from "react";
import { Header } from "./structure/Header/Header";
import { Body } from "./structure/Body/Body";
import { Footer } from "./structure/Footer/Footer";
import { useRef } from "react";

let firstMount = true;
let startAndEndIndexes = {startIndex: 0, endIndex: 18};
const initialMountForAllGames = {value: false};
const initialMountForFirst_18_Games = {value: false};

export const Ps5Games_Page = () => {

  // debugger;
  if (firstMount) {
	firstMount = false;
	console.log('My First Mount!');
  }

  return (
    <>
      <Header />
      <Body
	    startAndEndIndexes= {startAndEndIndexes}
        initialMountForAllGames={initialMountForAllGames}
        initialMountForFirst_18_Games={initialMountForFirst_18_Games}
      />
    </>
  );
};
