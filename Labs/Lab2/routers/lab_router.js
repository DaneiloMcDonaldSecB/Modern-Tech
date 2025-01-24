import express from "express";
const router = express.Router();

router.get("/", (req, res)=>{
   res.send("Welcome to the lab router") 
})

// name -> /lab/name
router.get("/name", (req, res)=>{
    res.send("Daneilo McDonald") 
 })
 
 // greeting -> /lab/name
 router.get("/greeting", (req, res)=>{
    res.send("Hello, I'm Daneilo. My student number is N01652962.") 
 })
 

router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x + y}`);
})

router.get("/subtract/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x - y}`);
})

router.get("/divide/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x / y}`);
})

router.get("/multiply/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x * y}`);
});

router.get("/calculate/:a/:b/operation", (req, res) =>{

    switch (req.params.operation) {
        case "+":
            let a = parseFloat(req.params.x)
            let b = parseFloat(req.params.y)

            res.send (`${a + b}`);
            break;

            case "-":
                res.send (`${a - b}`);
                break;
            
            case "*":
                res.send (`${a * b}`);
                break;

                case "/":
                    res.send (`${a / b}`);
                    break;

        default:
            res.send("WRONG OPERATION");

    }
})
export default router;


