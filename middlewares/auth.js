const jwt = require("jsonwebtoken");


exports.auth = (req,res,next) => {
  let token = req.header("x-api-key");
  if(!token){
    res.status(401).json({msg:"You must send token to this endpoint"});
  }
  try{
    let decodeToken = jwt.verify(token,"monkeysSecret");
    // נעביר לפרמטר ריק את המידע בדיקוד טוקן
    req.tokenData = decodeToken;
    
    next();
  }
  catch(err){
    res.status(401).json({msg:"Token invalid or expired"})
  }
}



