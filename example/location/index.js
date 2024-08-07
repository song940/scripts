import {
  ready,
  addEventListener as on,
  querySelector as $, filterEvent
} from '../../dom.js';
import { requestLocation } from '../../location.js';

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

ready(() => {

  const mapLink = $('#map-link');

  on(document, 'click', filterEvent('#find-me', async e => {
    const position = await requestLocation();
    const { latitude, longitude } = position.coords;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  }));

});

