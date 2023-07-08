import {showDistance, showTotalLitres, sumOfKilometers} from './utils';

const addBtns = document.querySelectorAll('.btn-add');
const cityValue = document.querySelector('.city-value span');
const trackValue = document.querySelector('.track-value span');
const otherCityValue = document.querySelector('.otherCity-value span');

const cityInput = document.querySelector('.city-input');
const cityDistance = document.querySelector('.city-distance');
const cityResult = document.querySelector('.city-result span');
const cityTotalKm = document.querySelector('.сity-kilometers span');

const trackInput = document.querySelector('.track-input');
const trackDistance = document.querySelector('.track-distance');
const trackResult = document.querySelector('.track-result span');
const trackTotalKm = document.querySelector('.track-kilometers span');

const otherCityInput = document.querySelector('.otherCity-input');
const othercityDistance = document.querySelector('.otherCity-distance');
const othercityResult = document.querySelector('.otherCity-result span');
const otherCityTotalKm = document.querySelector('.otherCity-kilometers span');

const cityKilometers = [];
const trackKilometers = [];
const otherCityKilometers = [];

const addKilometers = () => {
  addBtns.forEach(btn => {
    if (btn.classList.contains('city-add')) {
      btn.addEventListener('click', () => {
        if (cityInput.value) {
          cityKilometers.push(parseInt(cityInput.value, 10));
        }
        cityInput.value = '';
        showDistance(cityDistance, cityKilometers);
        showTotalLitres(cityResult, cityKilometers, cityValue);
        sumOfKilometers(cityTotalKm, cityKilometers);
      });
    }

    if (btn.classList.contains('track-add')) {
      btn.addEventListener('click', () => {
        if (trackInput.value) {
          trackKilometers.push(parseInt(trackInput.value, 10));
        }
        trackInput.value = '';
        showDistance(trackDistance, trackKilometers);
        showTotalLitres(trackResult, trackKilometers, trackValue);
        sumOfKilometers(trackTotalKm, trackKilometers);
      });
    }

    if (btn.classList.contains('otherCity-add')) {
      btn.addEventListener('click', () => {
        if (otherCityInput.value) {
          otherCityKilometers.push(parseInt(otherCityInput.value, 10));
        }
        otherCityInput.value = '';
        showDistance(othercityDistance, otherCityKilometers);
        showTotalLitres(othercityResult, otherCityKilometers, otherCityValue);
        sumOfKilometers(otherCityTotalKm, otherCityKilometers);
      });
    }
  });
};

export default addKilometers;
