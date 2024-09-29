'use client';

import React, { useEffect, useRef } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl, { Map as MapType } from 'mapbox-gl';

import styles from './Map.module.scss';
import mapMarkers from './mapMarkers';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef<MapType | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_ACCESS_KEY!;
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: mapMarkers[0],
      zoom: 8
    });
    map.current = newMap;
    mapMarkers.forEach(coords => {
      new mapboxgl.Marker().setLngLat(coords).addTo(newMap);
    });
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapContainer]);

  return <div ref={mapContainer} className={styles.container}></div>;
};

export default Map;
