
# Trabalho de testes automatizados com Mocha

Este projeto implementa a classe `ServicoDePagamento` e utiliza testes automatizados com Mocha para validar o comportamento esperado.

## Como executar os testes localmente

```bash
npm install
npm test
```

Para gerar os relatórios em arquivo, execute:

```bash
npm run test:report
```

A configuração utiliza o reporter `mochawesome`, gerando um relatório em HTML e um arquivo JSON na pasta `reports/`.

## Pipeline de integração contínua

O projeto possui uma pipeline configurada no GitHub Actions em [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

### 1. Execução manual

A pipeline pode ser executada manualmente pelo GitHub Actions usando a opção `workflow_dispatch`.

### 2. Execução agendada (`schedule`)

A pipeline também roda automaticamente em dois horários:

- `0 11 * * *` → 08h00 da manhã, horário de Brasília
- `0 17 * * *` → 14h00 da tarde, horário de Brasília

> Observação: o cron do GitHub Actions é interpretado em UTC. Por isso, os horários acima foram ajustados para refletirem o fuso horário de Brasília.

### 3. Execução por push

A pipeline é disparada automaticamente ao fazer `push` nas branches `main` e `master`.

## Relatório gerado pela pipeline

Durante a execução, a pipeline:

- executa os testes com Mocha;
- gera relatórios em HTML e JSON com `mochawesome`;
- publica a pasta `reports/` como artefato do workflow para download.

## Exemplo de uso da classe

```javascript
import ServicoDePagamento from './src/servicoDePagamento.js';

const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
console.log(servicoDePagamento.consultarUltimoPagamento());
```

## Saída esperada

```javascript
{
  codBarra: '0987-7656-3475',
  empresa: 'Samar',
  valor: 156.87,
  categoria: 'cara'
}
```