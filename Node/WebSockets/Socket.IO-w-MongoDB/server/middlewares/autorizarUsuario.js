import jwt from 'jsonwebtoken';

function autorizarUsuario(socket, next) {
    const token = socket.handshake.auth.token;
    
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      socket.emit('usuario_autenticado', decoded);
      next();
    } catch (err) {
      next(err)
    }
  }
  
  export default autorizarUsuario;