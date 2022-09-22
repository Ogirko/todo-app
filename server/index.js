import express from "express";
const app = express();
import router from "./routes/tasks.routes.js";
import connectDB from "./db/connect.js";
import dotenv from 'dotenv';
dotenv.config();

// middleware
/* app.use(express.static())  // <- put frontend folder */
app.use(express.json()); // json is needed to get data in 'req.body'

// routes
app.use('/api/v1/tasks', router);

// app.get('api/v1/tasks') - get all the tasks
// app.post('api/v1/tasks') - create a new task
// app.get('api/v1/tasks/:id') - get one task
// app.update('api/v1/tasks/:id') - update task
// app.delete('api/v1/tasks/:id') - delete one task

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_DB_CONNECTION)
    app.listen(port, () => 
      console.log(`server is listening on port ${port}...`)
      );
  } catch (error) {
    console.log(error);
  }
};

startServer();