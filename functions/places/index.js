const { mocks, addMockImage } = require("./mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }
    return response.send(data);
  }

  client
    .placesNearby({
      params: {
        location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((r) => {
      r.data.results = r.data.results.map(addMockImage);
      return response.json(r.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
