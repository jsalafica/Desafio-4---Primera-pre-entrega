import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", router);

// app.use((req, res) => {
//   res.json({
//     error: -2,
//     desc: `Route ${req.path} method ${req.method} doesn't exist`,
//   });
// });

app.use("/", router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server listening on port " + PORT);
  }
});
