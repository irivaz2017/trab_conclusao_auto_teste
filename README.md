
# Trabalho: Parte prática de JavaScript

## Descrição

Crie uma classe que possua dois métodos:

- Um método para realizar pagamento
- Outro método para consultar o último pagamento

Os pagamentos serão armazenados como objetos JavaScript dentro de uma lista de pagamentos.

Cada pagamento terá as propriedades:

- Código de Barras
- Empresa
- Valor

Quando um pagamento for realizado e o valor for maior que `100.00`,
o pagamento também terá a propriedade:

```javascript
categoria: 'cara'
```

Caso contrário, a propriedade categoria ficará como:

```javascript
categoria: 'padrão'
```

O método de consulta deverá retornar apenas o último pagamento realizado.

---

## Exemplo de uso

```javascript
const servicoDePagamento = new ServicoDePagamento();

servicoDePagamento.pagar(
  '0987-7656-3475',
  'Samar',
  156.87
);

console.log(
  servicoDePagamento.consultarUltimoPagamento()
);
```

## Saída esperada

```javascript
{
   codigoBarras: '0987-7656-3475',
   empresa: 'Samar',
   valor: 156.87,
   categoria: 'cara'
}
```