import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
const app = express();





app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// connecting mongo with server

app.use('/posts', postRoutes)
// mongo: wm12 wali mail
const CONNECTION_URL =
  "mongodb+srv://wajahat:wajahat@yadein.yw2lqph.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Yadoon ka Server is running on port: ${PORT} And successfully Connected to yadoon ke Database`
      )
    )
  )
  .catch((error) => console.log(error.message));

//   mongoose.set('useFindAndModify', false);
mongoose.set("strictQuery", false);
