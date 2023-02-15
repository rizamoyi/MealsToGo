const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: "",
      },
      timeout: 1000,
    })
    .then((r) => {
      return response.json(r.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });

  // return response.status(400).send("You must set mock to true");
};
