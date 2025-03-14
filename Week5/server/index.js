
 import express from "express"; // if you are using type: module
 import cors from "cors";
 import multer from "multer";


 //grab info, parse file, save file in a destination  + set file name, all good
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now();
      cb(null, uniquePrefix + file.fieldname)
    }
  });
  
  const upload = multer({ storage: storage })
 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(cors());
app.use(express.urlencoded({extended:true})); //Plain HTML FORMS
app.use(express.json()); //accepts json DATA
 
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/data", (req, res) => {
    res.json({
        name: "Daneilo",
        password: "password123",
        username: "DaneiloMac"
    })
  }); 

  app.post("/login",(req, res) =>{
    console.log(req.body);
    res.json("I get your Information")
  })

  app.post("/upload", upload.single("file"), (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.json("I got your file")
  })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});


/*
React -> 
    Server -> 
        /Image -> Parse for req.body with multer -> we got it

*/