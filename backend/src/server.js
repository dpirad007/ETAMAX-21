const express = require("express");
require("./db/mongoose");
const usersRoute = require("./routes/users");
const eventsRoute = require("./routes/events");
require("dotenv").config();

const app = express();
const port = 3000 || process.env.PORT;
// app.use((req,res,next)=>{
//     res.status(503).send('The service is under maintainance')
// })

app.use(express.json());

// setting up routes
app.use("/api/users/", usersRoute);
app.use("/api/events/", eventsRoute);

app.get("/", (req, res) => {
  return res.send("Welcome");
});

app.listen(port, () => {
  console.log("Server is up and running on http://localhost:" + port);
});
