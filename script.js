const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {

    if ((id > 0) && (id <= 5)){
        let pedidoCorte = id -1;
        return barbearia.cortes[pedidoCorte];
      }
        return `Corte não encontrado`;
}

function buscaBarbaPorId(id) {
    
    if ((id > 0) && (id <= 5)){
        let pedidoBarba = id -1;
        return barbearia.barbas[pedidoBarba];
      }
      return `Barba não encontrada`;
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto == true){
        return `Estamos abertos`;
      }
      return `Estamos fechados`;
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {

    let corte = buscaCortePorId(corteId).tipo;
    let barba = buscaBarbaPorId(barbaId).tipo;
    let precoCorte = buscaCortePorId(corteId).valor;
    let precoBarba = buscaBarbaPorId(barbaId).valor;
    

    let pedido = {
      nome: nomeCliente,
      pedidoCorte: corte,
      pedidoCortePreco: precoCorte,
      pedidoBarba: barba,
      pedidoBarbaPreco: precoBarba,
    }
    return pedido;
}

function atualizarServico(lista, id, novoValor, novoTipo) {

    let novoServico = lista;
    

    if ((id > 0) && (id <= 5)){
      
      for( let i=0; i< lista.length; i++){
        if (novoServico[i].id == id){
          novoServico[i].valor = novoValor;
          novoServico[i].tipo = novoTipo;
        }
      }
      console.log("lista de serviços atualizada");
      return novoServico
  }
  return `id INCORRETO! Insira um número de 1 a 5`;
}

function calculaTotal(pedido) {

    let valorPedido = (pedido.pedidoCortePreco) + (pedido.pedidoBarbaPreco);

    console.log("pedido realizado");
    console.log(criaPedido("Idalmo",1,1));
    return valorPedido;
}
  
  

