import mapboxgl from 'mapbox-gl';

let iconUrls = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

const buildMarker = function (type, arrayOfCord) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconUrls[type]})`;
  markerDomEl.setAttribute('id', 'activity');

  return new mapboxgl.Marker(markerDomEl).setLngLat(arrayOfCord);
};

export default buildMarker;
