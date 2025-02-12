const fs = require("fs/promises");

exports.fetchDogs = async () => {
  const data = await fs.readFile("./data/dogs.json", "utf-8");
  const dogs = JSON.parse(data);
  return dogs;
};
