function carregarPagina(pagina) {
  const conteudoPrincipal = document.getElementById("conteudoPrincipal");

  const url = `${pagina}.html`;
  const script = `${pagina}.js`;

  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      conteudoPrincipal.innerHTML = html;
      const scriptNovo = document.createElement("script");
      scriptNovo.src = `../javaScript/${script}`;
      document.body.appendChild(scriptNovo);
    });
}
sessionStorage.removeItem('taskId');
localStorage.setItem("ipApi", "http://10.0.3.149:3000/");
