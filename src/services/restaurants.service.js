import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `http://127.0.0.1:5001/meals-to-go-cb72d/us-central1/geocode?placesNearby?location=${location}`
  ).then((res) => {
    console.log("res", res);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
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
