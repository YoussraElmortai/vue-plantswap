// const config = {
//   // api keys
// };

// const db = contentful.initializeApp(config);
// export default db;

const contentful = require("contentful");

const client = contentful.createClient({
  space: "fqaoncc3hxft",
  environment: "master", // defaults to 'master' if not set
  accessToken: "HndwrgC3YextF_59XSBr3gWhZWi8YsCrMfKdN4CaL24",
});

client
  .getEntry("6HbI1gwrOQNrpiSSJirEuK")
  .then((entry) => console.log(entry))
  .catch(console.error);
