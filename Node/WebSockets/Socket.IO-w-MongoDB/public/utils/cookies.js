function armazenarCookie(nome, valor) {
  document.cookie = `${nome}=${valor}; expires=${new Date(Date.now() + 3600000).toUTCString()}; path=/`;
}

function lerCookie(nome) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(nome + '=')) {
      return cookie.substring(nome.length + 1);
    }
  }
  return null;
}

function removerCookie(nome) {
  document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export { armazenarCookie, lerCookie, removerCookie };