import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://us-central1-meals-to-go-cb72d.cloudfunctions.net/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = (results = []) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResults);
};
