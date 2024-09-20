import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';

import style from "../OpenStreetMap/OpenStreetMap.module.css";
import carVideo from "./videos/car.mp4";

export const OpenStreetMap = () => {
    let location = useLocation();
    let videoRef = useRef(null);


    let coordinates = {
        'GalaxyPlay Sofia Ring Mall': [42.6977, 23.3219],
        'GalaxyPlay Grand Mall Varna': [43.2141, 27.9147],
        'GalaxyPlay Grand Mall Plovdiv': [42.1354, 24.7453],
    };

    let paths = location.pathname.split('/');
    let currentPlace = coordinates[paths[paths.length - 1].split('%20').join(' ')];

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }

        // setTimeout(() => {
        //     videoRef.current.play();
        // }, 5000);

    }, []);

    return (
        <article className={style['main-wrapper-container']}>

            <h2 className={style['smooth-text']}>We are expecting you!</h2>

            <video
                ref={videoRef}
                className={style['back-video']}
                autoPlay
                muted
                src={carVideo}
            />

            <article className={style['map-wrapper']}>
                <div className={style['map-container']}>
                    <MapContainer center={currentPlace} zoom={15}
                        style={{
                            height: 
                            "400px", 
                            maxWidth: 
                            "800px", 
                            borderRadius: '1em',
                            position: 'relative',
                           
                        }}>
                        <TileLayer
                            style={{
                                
                                position: 'absolute' 
                            }}
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={currentPlace}>
                            <Popup>
                                GalaxyPlay Shop
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </article>
        </article>
    );
}
