import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequese = (searchTerm) => {
  const mock = locations[searchTerm];

  return new Promise((resolve, reject) => {
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
