import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://us-central1-meals-to-go-cb72d.cloudfunctions.net/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
