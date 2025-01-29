import crypto from 'crypto';

function salEhash(senha) {
  const sal = crypto.randomBytes(16).toString('hex');
  const hashDoSal = crypto.createHash('sha256').update(sal + senha).digest('hex');
  return { sal, hashDoSal };
}

export default salEhash;