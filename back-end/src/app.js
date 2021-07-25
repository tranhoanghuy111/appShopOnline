const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config");
const { port } = config;
const cors = require('cors')

const app = express();

// const vinamilkRoutes = require("./routes/vinamilk.router");
// const typeRoutes = require("./routes/type.router");
// const coopSmileRoutes = require("./routes/coop_smile.router");
// const tikiBookRoutes = require("./routes/tiki_book.router");


// const bhxRoutes = require("./routes/bhx.router");
// const lavieRoutes = require("./routes/lavie.router");
// const tigerRoutes = require("./routes/tiger.router");
const productRoutes = require("./routes/product.router");
const userRoutes = require('./routes/user.router')
const billRoutes = require('./routes/bill.router')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
app.use(cors());


app.get("/", (req, res) => {
  res.json("hello world");
});

// app.use("/vinamilk", vinamilkRoutes);
// app.use("/type", typeRoutes);
// app.use("/coop_smile", coopSmileRoutes);
// app.use("/tiki_book", tikiBookRoutes);

// app.use("/bhx", bhxRoutes);
// app.use("/lavie", lavieRoutes);
// app.use("/tiger", tigerRoutes);
app.use("/product", productRoutes);
app.use("/user",userRoutes)
app.use("/bill",billRoutes)



const DB = require("./db");

const startSever = async () => {
  app.listen(port, async () => {
    console.log(`QLBH API is running on port ${port} http://localhost:${port}`);
  });
};
startSever();

//Connect to Database
DB().then(() => {
  console.log("MongoDb connected");
});
