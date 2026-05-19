export default class ServicoDePagamento {
    #pagamentos;  
        constructor(){
            this.#pagamentos=[];
        }
  
      realizarPagamento(codBarra,empresa,valor){
        let categoria ='padrao';
        if(valor>100.00){
          categoria='cara'
        }
        this.#pagamentos.push({
          codBarra: codBarra,
          empresa: empresa,
          valor: valor,
          categoria: categoria
        })
      }

      consultarUltimoPagamento(){
        return this.#pagamentos.at(-1)
      }

}

/*
//Serve para testar somente o arquivo servisoDePagamento.js no NODE
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.realizarPagamento('0987-7656-3475','Volkswagen',1000.00);
servicoDePagamento.realizarPagamento('0111-7656-3475','Mercedez',100.01);
console.log(servisoDePagamento.consultarUltimoPagamento()); */