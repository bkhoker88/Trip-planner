import mapboxgl from 'mapbox-gl';
import buildMarker from './marker';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmtob2tlcjg4IiwiYSI6ImNra2U4OHpzNDAzeGkyc3BleDAzNHAzN2kifQ.MwV0ofxMflobYF9x62jvnQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

const marker = buildMarker('activity', [-74.009151, 40.705086]).addTo(map);
