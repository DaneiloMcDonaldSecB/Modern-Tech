const auth = (req, res, next) => {
   if (req.query.username === "Daneilo") {
    next();
   } else {
    res.send("ACCESS NOT ALLOWED")
    // res.redirect("http://localhost:8000/")
    // res.json({message: "You are not the right user, login with the right user"})
   }
    
};

export default auth;