// função para verificar se a imagem esta no formato retrato ou paisagem

 const ePaisagem = (larg,alt) => larg > alt ? true : false;
 const mensagem = (resultado) => resultado === true ? "Paisagem" : "Retrato";

 console.log(`A imagem esta no formato ${mensagem(ePaisagem(3,5))}`);