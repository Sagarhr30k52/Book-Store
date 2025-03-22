import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./Route/bookRoute.js"
import userRoute from "./Route/userRoute.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const mongoUrl = "mongodb+srv://Sagar:<db_password>.mongodb.net//book-Store?retryWrites=true&w=majority";

// creating server
const port = process.env.PORT || 3000
const DBuserName = process.env.DB_USERNAME
const DBPassword= process.env.DB_PASSWORD;

// connecting to mongoDB


const mongoURL = `mongodb+srv://${DBuserName}:${DBPassword}@backend.vt7l2.mongodb.net/bookStore?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the bookStore database!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Optional: If you want to use a specific database for the rest of your application
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database!');
});


// uploading data to mogodb



// defining route
app.use("/book", bookRoute);
app.use("/user",userRoute);


app.listen({port},()=>{
    console.log(`server running at ${port}`);
})