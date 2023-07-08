import {showDistance, showTotalLitres, sumOfKilometers} from './utils';

const removeBtns = document.querySelectorAll('.btn-remove');
const cityValue = document.querySelector('.city-value span');
const trackValue = document.querySelector('.track-value span');
const otherCityValue = document.querySelector('.otherCity-value span');

const cityDistance = document.querySelector('.city-distance');
const cityResult = document.querySelector('.city-result span');
const cityTotalKm = document.querySelector('.сity-kilometers span');

const trackDistance = document.querySelector('.track-distance');
const trackResult = document.querySelector('.track-result span');
const trackTotalKm = document.querySelector('.track-kilometers span');

const othercityDistance = document.querySelector('.otherCity-distance');
const othercityResult = document.querySelector('.otherCity-result span');
const otherCityTotalKm = document.querySelector('.otherCity-kilometers span');

let cityKilometers = [];
let trackKilometers = [];
let otherCityKilometers = [];

const removeKilometers = () => {
  removeBtns.forEach(btn => {
    if (btn.classList.contains('city-remove')) {
      btn.addEventListener('click', () => {
        if (cityKilometers.length) {
          cityKilometers = cityKilometers.slice(0, -1);
        }
        if (!cityKilometers.length) {
          cityDistance.textContent = '';
          cityResult.textContent = '0';
        }
        showDistance(cityDistance, cityKilometers);
        showTotalLitres(cityResult, cityKilometers, cityValue);
        sumOfKilometers(cityTotalKm, cityKilometers);
      });
    }
    if (btn.classList.contains('track-remove')) {
      btn.addEventListener('click', () => {
        if (trackKilometers.length) {
          trackKilometers = trackKilometers.slice(0, -1);
        }
        if (!trackKilometers.length) {
          trackDistance.textContent = '';
          trackResult.textContent = '0';
        }
        showDistance(trackDistance, trackKilometers);
        showTotalLitres(trackResult, trackKilometers, trackValue);
        sumOfKilometers(trackTotalKm, trackKilometers);
      });
    }
    if (btn.classList.contains('otherCity-remove')) {
      btn.addEventListener('click', () => {
        if (otherCityKilometers.length) {
          otherCityKilometers = otherCityKilometers.slice(0, -1);
        }
        if (!otherCityKilometers.length) {
          othercityDistance.textContent = '';
          othercityResult.textContent = '0';
        }
        showDistance(othercityDistance, otherCityKilometers);
        showTotalLitres(othercityResult, otherCityKilometers, otherCityValue);
        sumOfKilometers(otherCityTotalKm, otherCityKilometers);
      });
    }
  });
};

export default removeKilometers;
