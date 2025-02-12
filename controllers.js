const { fetchDogs } = require("./models");

exports.getDogs = async (request, response) => {
  try {
    const dogs = await fetchDogs();
    response.send({ dogs });
  } catch (error) {
    next(error);
  }
};
