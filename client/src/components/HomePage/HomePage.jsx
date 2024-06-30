import React, { useState, useEffect } from 'react';
import "../HomePage/HomePage.css";
import { Header } from "./structure/Header";
import { LiveWallperSection } from "./structure/LiveWallperSection";
import { DemoPreview } from './structure/DemoPreview';

export const HomePage = () => {
  const [showDemoPreview, setShowDemoPreview] = useState(false);

  useEffect(() => {
	setTimeout(() => {
		setShowDemoPreview(true);
	}, 800);
  }, []);

  function showDemoPreviewHandler(booleanValue) {
	setShowDemoPreview(booleanValue);
  }

  return (
    <>
      <Header />
      <LiveWallperSection showDemoPreviewHandler= {showDemoPreviewHandler}/>

      {showDemoPreview && <DemoPreview />}

	  

    </>
  );
};
