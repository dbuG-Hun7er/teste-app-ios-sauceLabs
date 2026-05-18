# 📱 EBAC Shop — Automação Mobile iOS com CI

> **Módulo 30 | EBAC – Engenharia de Qualidade de Software**  
> Integração de testes mobile automatizados com Device Farm via GitHub Actions.

---

## 🎯 Objetivo do Projeto

Demonstrar a integração entre **GitHub Actions** e **SauceLabs** para execução de testes mobile iOS em ambiente de CI, validando que o pipeline consegue:

1. Baixar o repositório no GitHub Actions
2. Instalar as dependências do projeto
3. Conectar ao SauceLabs
4. Subir o app iOS `LojaEBAC-sim.zip`
5. Executar um teste automatizado remoto
6. Registrar a execução em vídeo dentro do SauceLabs

---

## 🛠️ Stack Tecnológica

| Tecnologia | Descrição |
|---|---|
| JavaScript | Linguagem principal |
| Node.js | Runtime |
| WebdriverIO | Framework de automação |
| Appium | Driver mobile |
| XCUITest | Driver iOS |
| Mocha | Framework de testes |
| SauceLabs | Device Farm (nuvem) |
| GitHub Actions | CI/CD |

---

## 📱 Device Farm Utilizada

**SauceLabs** — configuração utilizada no teste:

| Configuração | Valor |
|---|---|
| Plataforma | iOS |
| Device | iPhone XR Simulator |
| Versão | iOS 17.0 |
| Automação | XCUITest |
| App | `LojaEBAC-sim.zip` |

---

## 🧪 Estratégia de Teste

Para o Módulo 30 foi criado um **smoke test de login**, validando o fluxo essencial da aplicação:

1. Abrir o app EBAC Shop
2. Navegar até a aba de perfil (`tab-Account`)
3. Preencher e-mail e senha
4. Clicar no botão de login
5. Validar que o botão de login não está mais visível (login realizado com sucesso)

### Por que Smoke Test?

Durante os testes com o fluxo completo de checkout, foram observadas instabilidades relacionadas ao tempo de execução e à limitação do plano gratuito do SauceLabs:

- Rate limit após muitas execuções seguidas
- Timeout em fluxos longos
- Sessões interrompidas antes da finalização

Por isso, foi priorizado um teste menor e mais estável, com foco no objetivo principal do exercício: **validar a integração entre GitHub Actions e SauceLabs**.

---

## 📁 Estrutura do Projeto

```
.
├── app/
│   └── LojaEBAC-sim.zip          # App iOS (não versionado)
├── config/
│   ├── sauce.conf.js             # Configuração SauceLabs
│   └── wdio.conf.js              # Entry point WebdriverIO
├── test/
│   ├── pageobjects/
│   │   ├── home.page.js          # Navegação entre tabs
│   │   ├── login.page.js         # Tela de login
│   │   └── ...                   # Demais page objects
│   └── specs/
│       ├── smoke.spec.js         # Smoke test — Módulo 30
│       └── checkout.spec.js      # Teste completo — Módulo 29
├── .github/
│   └── workflows/
│       └── mobile-ci.yml         # Pipeline GitHub Actions
├── .env                          # Credenciais (não versionado)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ GitHub Actions

O workflow está configurado na branch **`ci`**.

**Arquivo:** `.github/workflows/mobile-ci.yml`

O pipeline executa os seguintes passos:

1. Checkout do repositório
2. Setup do Node.js
3. Instalação das dependências (`npm ci`)
4. Execução do teste mobile no SauceLabs (`npm test`)

---

## 🚀 Execução Local

```bash
# Instalar dependências
npm install

# Executar testes
npm test
```

> ⚠️ A execução iOS **não roda localmente no Windows**.  
> O teste iOS é executado remotamente via SauceLabs.

---

## 📊 Evidências de Execução

A execução do teste é registrada automaticamente no SauceLabs, incluindo:

- 🎬 Vídeo da execução
- 📋 Logs do Appium
- 🖱️ Comandos executados
- 📸 Screenshots
- ✅ Status da sessão

---

## 🌿 Branch Utilizada

```
ci
```

---

## ✅ Resultado Esperado

- GitHub Actions configurado e executando ✅
- SauceLabs recebendo a execução ✅
- App iOS abrindo remotamente ✅
- Teste automatizado interagindo com a aplicação ✅
- Execução gravada na Device Farm ✅

---

## 📝 Conclusão

Este projeto demonstra a integração de testes mobile iOS com CI/CD usando **GitHub Actions** e **SauceLabs**.

Devido às limitações observadas em fluxos longos no ambiente gratuito do SauceLabs, foi adotado um **smoke test de login** como validação principal do pipeline — abordagem que atende ao objetivo do exercício: executar testes automatizados mobile em uma Device Farm através do GitHub Actions.

---

<div align="center">
  <sub>Desenvolvido como exercício do Módulo 30 · EBAC – Escola Britânica de Artes Criativas e Tecnologia</sub>
</div>