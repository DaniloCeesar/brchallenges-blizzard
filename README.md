<div align="center">
<h1>Blizzard®<br/><sub>Desafio #2 do <a href="https://brchallenges.com/">BRChallenges</a>.</sub></h1>

▶️ <a href="https://brchallenges-blizzard.vercel.app/">Demo</a> |
<a href="#-visao-geral">Visão geral</a> |
<a href="#-desenvolvimento-e-testes">Desenvolvimento e Testes</a> |
<a href="#-atribuicoes">Atribuições</a> |
<a href="#-licenca">Licença</a>

<pre lang="bash"><code style="white-space: pre-line">Landing page da empresa Blizzard®, recriada para fins educativos, destinada ao Desafio #2 do BRChallenges.
</code></pre>

<img alt="Repository top language" src="https://img.shields.io/github/languages/top/daniloceesar/brchallenges-blizzard.svg" />

<img alt="Repository size" src="https://img.shields.io/github/repo-size/daniloceesar/brchallenges-blizzard.svg" />

<a href="https://github.com/DaniloCeesar/brchallenges-blizzard/blob/main/COPYING">
<img src="https://img.shields.io/badge/license-GPL%203.0-blue.svg"/>
</a>

</div>
<hr />

<div align="center">
<img alt="Captura de tela" src="https://raw.githubusercontent.com/DaniloCeesar/brchallenges-blizzard/assets/preview.png" />
</div>

## ▶️ Demo

Acesse a página de demonstração: [https://brchallenges-blizzard.vercel.app/](https://brchallenges-blizzard.vercel.app/).

## 📚 Visão geral

Este projeto visa à implementação do código-fonte de uma _landing page_ da empresa Blizzard®, composta por: um menu de navegação; um _banner_ "hero" contendo dados dos principais jogos da empresa; uma listagem dos jogos exclusivos; e um rodapé que contém informações para _download_ do aplicativo Battle.net® da empresa.

As diferentes soluções para este desafio estão disponíveis no [BRChallenges](https://brchallenges.com/).

Para a realização deste desafio foi utilizado um protótipo Figma® como base, de autoria do designer [Gilberto Prado](https://www.linkedin.com/in/gilberto-insanydesign/). Mais informações estão disponíveis na [página do desafio no BRChallenges](https://www.brchallenges.com/desafio/blizzard).

<details>
  <summary>Tecnologias</summary>

### Tecnologias

- **[Tailwind CSS](https://tailwindcss.com/)** — framework e coleção de classes CSS, desenvolvido em código-aberto.
- **[Alpine.js](https://alpinejs.dev/)** — framework de código-aberto escrito em JavaScript.

</details>

<details>
  <summary>Requisitos do desafio</summary>

### Requisitos do desafio

Conforme descritos no [repositório original do desafio](https://github.com/leovargasdev/br-challenges-blizzard):

### Nível Fácil

- [x] Criar as seções: **Menu**, **Banner hero**, **Footer**.
- [x] O texto e o ícone do botão “Baixar jogo” devem ser alterados conforme o sistema operacional do usuário que estiver acessando a página. ([Acessar material de apoio](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)).
- [x] Aplicar efeito de _hover_ nas opções do menu de navegação.
- [x] Aplicar responsividade para as seguintes resoluções: 1920px, 1440px, 768px e 375px.

### Nível Médio

- [x] Todos os requisitos do nível Fácil.
- [x] Criar as seções: **Menu**, **Banner hero**, **Jogos Exclusivo**, **Footer**.
- [x] Buscar a lista de jogos via API. ([Acessar endpoint](https://api-brchallenges.vercel.app/api/blizzard/games)).
- [x] Aplicar efeito de _hover_ nas imagens dos jogos da seção **Jogos Exclusivos**.
- [x] Alterar as informações da seção **Banner Hero** ao selecionar uma opção no menu lateral. Os jogos disponíveis são: **Diablo®**, **HearthStone®** e **World of Warcraft®**.

### Nível Difícil

- [x] Todos os requisitos dos níveis Fácil e Médio.
- [x] Ao clicar no botão **Logar** do menu de navegação, deverá ser exibido o _modal de login_.
- [x] Criar componente de _dropdown_ para as opções **Jogos** e **Esportes** do menu de navegação.
- [x] Deverá ser reproduzido um _gif_ do jogo quando ocorrer o evento de _hover_ na capa do trailer.

</details>

## 🛠️ Desenvolvimento e Testes

### Requisitos

- **[Git](https://git-scm.com/)** — sistema de controle de versão gratuito e de código-aberto.
- **[npm](https://www.npmjs.com/)** — coleção pública de pacotes de código-aberto para Node.js.

### Instruções

1. `git clone https://github.com/DaniloCeesar/brchallenges-blizzard.git` — clone este repositório em um novo diretório;
2. `cd brchallenges-blizzard` — acesse o novo diretório que contém o código-fonte deste projeto;
3. `npm install` — instale as dependências, a partir do `package.json`, em um diretório `node_modules`;
4. `npm run build` — gere o código para o ambiente de produção em um diretório `dist`.

## 👥 Atribuições

Este projeto desenvolve e implementa tecnologias de código-aberto. Podem estar sendo utilizadas bibliotecas de terceiros, fragmentos de código-fonte, e outros recursos para ambos os ambientes de desenvolvimento e de produção.

Blizzard Entertainment e seus jogos exclusivos são marcas registradas da Blizzard Entertainment, Inc., com direitos de proteção no Brasil, Estados Unidos da América e em outros países. **Este projeto não é endossado, afiliado, nem realizado pela Blizzard® ou Blizzard Entertainment.**

## ⚖️ Licença

O código-fonte deste projeto encontra-se licenciado sob as regras de GNU General Public License v3.0. Acesse [COPYING](https://github.com/DaniloCeesar/brchallenges-blizzard/blob/main/COPYING) para obter mais informações.

O _design_ original e outros recursos, incluindo as marcas protegidas de terceiros, podem não estar abrangidos por estes termos. Consulte seus respectivos autores e/ou titulares para obter mais informações.

As marcas e demais recursos de terceiros, incluindo citações e arquivos de mídia, contidos neste projeto são usados para fins meramente educativos.
