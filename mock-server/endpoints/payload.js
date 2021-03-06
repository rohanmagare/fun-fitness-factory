var payload = require("../data/payload.json");
var axios = require("axios");
var bodyParser = require("body-parser");

module.exports = app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // app.post("/payload", (req, res) => {
  //   // 1. get the _rev first (GET)
  //   let revId = "";
  //   axios.get("http://127.0.0.1:5984/payload/payload").then(response => {
  //     revId = response.data._rev;
  //     // 2. update document (PUT)
  //     axios
  //       .put("http://127.0.0.1:5984/payload/payload", {
  //         _rev: revId,
  //         payload: payload
  //       })
  //       .then(response => {
  //         res.send({
  //           status: "Successfully updated the document",
  //           response: response.data
  //         });
  //       })
  //       .catch(error => {
  //         res.send({
  //           status: "oooops"
  //         });
  //       });
  //     // 3. Verfication of the update (GET)
  //     axios.get("http://127.0.0.1:5984/payload/payload").then(response => {
  //       res.send({
  //         status: "Got updated document",
  //         response: payload
  //       });
  //     });
  //   });
  // });

  app.get("/payload", (req, res) => {
    axios.get("http://127.0.0.1:5984/payload").then(response => {
      res.send({
        status: "Got payload",
        payload
      });
    });
  });
};
