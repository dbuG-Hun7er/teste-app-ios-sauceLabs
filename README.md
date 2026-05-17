# 📱 EBAC Shop — Automação Mobile iOS

> **Módulo 29 | EBAC – Engenharia de Qualidade de Software**  
> Testes automatizados para aplicação iOS usando WebdriverIO, Appium e SauceLabs.

---

## 🧪 Sobre o Projeto

Projeto de automação mobile para o aplicativo **EBAC Shop (iOS)**, cobrindo o fluxo completo de checkout:

- Login com credenciais de usuário
- Navegação e busca de produtos
- Adição ao carrinho
- Cadastro de endereço (quando necessário)
- Finalização da compra e validação de sucesso

Os testes são executados em simuladores iOS hospedados na nuvem do **SauceLabs**, sem necessidade de macOS local.

---

## 🛠️ Stack

| Tecnologia | Versão |
|---|---|
| Node.js | >= 16.x |
| WebdriverIO | ^8.39.1 |
| Appium | 2.0.0 |
| XCUITest Driver | ^5.x |
| Mocha | ^8.x |
| SauceLabs | Free Tier / Real Devices |
| Sistema Operacional | Windows / macOS / Linux |

---

## 📋 Pré-requisitos

- **Node.js** instalado ([download](https://nodejs.org))
- **Conta SauceLabs** ([criar conta gratuita](https://saucelabs.com/sign-up))
- Arquivo `LojaEBAC-sim.zip` enviado para o **Sauce Storage**

### Como enviar o app para o Sauce Storage

```bash
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  -X POST "https://api.us-west-1.saucelabs.com/v1/storage/upload" \
  -H "Content-Type: multipart/form-data" \
  -F "payload=@LojaEBAC-sim.zip" \
  -F "name=LojaEBAC-sim.zip"
```

---

## ⚙️ Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/dbuG-Hun7er/teste-app-ios-sauceLabs.git
cd teste-app-ios-sauceLabs
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SAUCE_USERNAME=seu_usuario_aqui
SAUCE_ACCESS_KEY=sua_chave_aqui
SAUCE_APP=LojaEBAC-sim.zip
```

> ⚠️ **NUNCA** suba o `.env` para o GitHub. Ele já está no `.gitignore`.

---

## 🚀 Executando os Testes

### Todos os testes
```bash
npm test
```

### Suite específica
```bash
npm run test:checkout
```

### Relatório Allure
```bash
npm run allure
```

---

## 📁 Estrutura do Projeto

```
teste-app-ios-sauceLabs/
├── app/
│   └── LojaEBAC-sim.zip        # App iOS (não versionado)
├── config/
│   ├── wdio.conf.js            # Entry point da configuração
│   └── sauce.conf.js           # Configuração SauceLabs + capabilities iOS
├── test/
│   ├── pageobjects/
│   │   ├── address.page.js     # Page Object - endereço
│   │   ├── browse.page.js      # Page Object - navegação/busca
│   │   ├── cart.page.js        # Page Object - carrinho
│   │   ├── checkout.page.js    # Page Object - checkout
│   │   ├── home.page.js        # Page Object - home/menu
│   │   ├── login.page.js       # Page Object - login
│   │   └── product.page.js     # Page Object - produto
│   └── specs/
│       └── checkout.spec.js    # Spec - fluxo de checkout
├── .env                        # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── README.md
```

---

## 📱 Capabilities iOS (SauceLabs)

```javascript
{
  platformName: 'iOS',
  'appium:app': 'storage:filename=LojaEBAC-sim.zip',
  'appium:deviceName': 'iPhone XR Simulator',
  'appium:platformVersion': '17.0',
  'appium:automationName': 'XCUITest',
  'sauce:options': {
    build: 'teste-ebacshop-ios',
    name: 'Teste Ebac Shop iOS',
    deviceOrientation: 'PORTRAIT',
    appiumVersion: '2.0.0'
  }
}
```

---

## 🔍 Estratégia de Seletores

Para garantir estabilidade nos testes remotos, foram utilizados seletores em ordem de preferência:

1. **Accessibility ID** — `$('~elementId')` — mais estável e recomendado
2. **iOS Predicate String** — `$('-ios predicate string:name == "X"')` — para elementos sem acessibilidade
3. **iOS Class Chain** — para estruturas hierárquicas complexas
4. **XPath** — evitado por ser frágil em ambientes remotos

---

## ⚠️ Limitações Conhecidas

| Limitação | Impacto |
|---|---|
| SauceLabs Free Tier tem minutos limitados | Poucos ciclos de execução por mês |
| Latência de rede (~500ms por comando) | Testes mais lentos que execução local |
| iOS não roda nativamente no Windows | 100% dependente de nuvem |
| Sessão expira em caso de timeout | Testes longos podem ser interrompidos |

---

## 🤝 Contribuição

1. Crie uma branch: `git checkout -b feat/nome-da-feature`
2. Commit suas alterações: `git commit -m 'feat: descrição'`
3. Push para a branch: `git push origin feat/nome-da-feature`
4. Abra um Pull Request

---

## 📄 Licença

ISC — veja o arquivo `package.json` para detalhes.

---

<div align="center">
  <sub>Desenvolvido como exercício do Módulo 29 · EBAC – Escola Britânica de Artes Criativas e Tecnologia</sub>
</div>
