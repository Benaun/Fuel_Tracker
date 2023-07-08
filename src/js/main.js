import carsList from './cars';
import addKilometers from './helpers/addFunction';
import removeKilometers from './helpers/remove';

const carsSelect = document.querySelector('#cars-select');
const calculation = document.querySelector('.calculations');

const cityValue = document.querySelector('.city-value span');
const trackValue = document.querySelector('.track-value span');
const otherCityValue = document.querySelector('.otherCity-value span');

const renderValues = () => {
  carsList.forEach(car => {
    if (car.name === carsSelect.value) {
      calculation.style.display = 'block';
      cityValue.textContent = car.city;
      trackValue.textContent = car.track;
      otherCityValue.textContent = car.otherCity;
    }
  });
};

carsSelect.addEventListener('change', renderValues);
addKilometers();
removeKilometers();
