# Automacao iOS - EBAC Shop

Projeto simples de automacao mobile iOS usando WebdriverIO, Appium e SauceLabs.

## Requisitos

- Node.js instalado
- Conta SauceLabs
- Aplicativo `LojaEBAC-sim.zip` enviado para o Sauce Storage

## Variaveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SAUCE_USERNAME=seu_usuario
SAUCE_ACCESS_KEY=sua_chave
SAUCE_APP=LojaEBAC-sim.zip
IOS_DEVICE=iPhone XR Simulator
IOS_VERSION=17.0
```

`SAUCE_APP`, `IOS_DEVICE` e `IOS_VERSION` sao opcionais. Se nao forem informados, o projeto usa os valores acima.

## Instalar dependencias

```bash
npm install
```

## Executar testes

```bash
npm test
```

Para executar apenas a suite de checkout:

```bash
npm run test:checkout
```

## Relatorio Allure

```bash
npm run allure
```
