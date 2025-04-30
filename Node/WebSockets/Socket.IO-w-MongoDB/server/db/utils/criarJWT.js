import jwt from 'jsonwebtoken';

function criarJwt(payload) {
  
  const secretKey = process.env.SECRET_KEY;
  const options = {
    expiresIn: '1h', // tempo de expiração do token
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
} 

export default criarJwt;