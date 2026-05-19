import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';

describe('**************** Serviço de pagamentos  ***************', function(){
      it('Validar que realizar um pagamento maior que R$100.00 , este e categorizado  como CARO.', function(){
        const servicoDePagamento = new ServicoDePagamento();  
            servicoDePagamento.realizarPagamento('0111-7656-3475','Mercedez',100.01);
        const respConsulta = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(respConsulta.categoria,'cara');
      });

      it('Validar que realizar um pagamento menor que R$100.00 , este e categorizado  como PADRAO.', function(){
        const servicoDePagamento = new ServicoDePagamento();  
            servicoDePagamento.realizarPagamento('0987-7656-3475','Volkswagen',100.00);
        const respConsulta = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(respConsulta.categoria,'padrao');
      });

      it('Validar a consulta do último pagamento', function(){
        const servicoDePagamento = new ServicoDePagamento();  
        servicoDePagamento.realizarPagamento('0002-7656-3475','Land-Cruiser',99.99);
        servicoDePagamento.realizarPagamento('0003-7656-3475','Volvo',100.01);
        const respConsulta = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(respConsulta.codBarra,'0003-7656-3475');
        assert.equal(respConsulta.empresa,'Volvo');
        assert.equal(respConsulta.valor,100.01);
        assert.equal(respConsulta.categoria,'cara');
       
      });

}); 

