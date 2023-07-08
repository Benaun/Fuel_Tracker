
export const showDistance = (domElement, array) => {
  if (array.length) {
    domElement.textContent = array.join(' + ');
  }
};

export const showTotalLitres = (domElement, array, carValue) => {
  if (array.length) {
    const result =
      array.reduce((a, b) => a + b, 0) * carValue.textContent / 100;
    domElement.textContent = result.toFixed(2);
  }
};

export const sumOfKilometers = (domElement, array) => {
  if (array.length) {
    const result = array.reduce((a, b) => a + b, 0);
    domElement.textContent = result;
  }
};
