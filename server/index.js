const express = require("express");
const cors = require('cors')
const {graphqlHTTP} = require("express-graphql");

const schema = require('./schema/schema');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
// REST API
app.get("/api", (req, res) => {
  console.log(req.query.text)

  res.json({ filteredState: ["California", req.query.text] });
});

// GraphQL to filter list
app.use(
    "/graphql",
    graphqlHTTP({
    schema: schema,
    graphiql: true,
    }));  


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


