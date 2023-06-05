# Anime List App

O Anime List App é um aplicativo desenvolvido em React Native estilizado com Tailwindcss, que permite aos usuários criarem suas próprias listas personalizadas de animes e acompanharem seu progresso.

![App Screenshots](/path/to/screenshots.png)

## Funcionalidades Principais

- Navegação intuitiva e amigável para os usuários explorarem diversas categorias de animes.
- Autenticação segura com opções de login usando e-mail e senha, ou autenticação social (Google e Facebook).
- Listas personalizadas para animes concluídos, assistindo, abandonados e pretendendo assistir.
- Possibilidade de adicionar novos animes à lista por meio da tela "Adicionar", inserindo informações como título, gênero, sinopse, classificação e imagem.
- Integração com a API Anilist.co para obter dados atualizados sobre animes.

## Screenshots

Aqui estão algumas capturas de tela do Anime List App:

### Tela Inicial (Home)

Descrição: A tela inicial exibe as categorias de animes, como "Mais populares da temporada" e "Animes da temporada". Os usuários podem navegar por essas categorias para descobrir novos animes.

![Tela Inicial](/path/to/home.png)

### Tela de Login e Registro

Descrição: Nesta tela, os usuários podem fazer login em suas contas existentes ou se registrar para criar uma nova conta. Eles podem utilizar endereço de e-mail e senha, ou optar por autenticação social, como login com Google ou Facebook.

![Tela de Login e Registro](/path/to/login.png)

### Tela de Lista de Animes Concluídos

Descrição: Esta tela exibe a lista de animes que o usuário já concluiu assistir. Os animes nessa lista são marcados como "concluídos" e exibem informações relevantes, como título e imagem.

![Tela de Animes Concluídos](/path/to/concluidos.png)

### Tela de Lista de Animes Assistindo

Descrição: Nesta tela, o usuário pode visualizar a lista de animes que está atualmente assistindo. Os animes nessa lista são marcados como "assistindo" e o usuário pode atualizar facilmente o episódio em que parou.

![Tela de Animes Assistindo](/path/to/assistindo.png)

### Tela de Lista de Animes Abandonados

Descrição: Nesta tela, o usuário pode ver a lista de animes que começou a assistir, mas decidiu abandonar. Esses animes são marcados como "abandonados" e o usuário pode removê-los da lista, se desejar.

![Tela de Animes Abandonados](/path/to/abandonados.png)

### Tela de Lista de Animes Pretendo Assistir

Descrição: Nesta tela, o usuário pode visualizar a lista de animes que planeja assistir no futuro. Os animes nessa lista são marcados como "pretendo assistir" e o usuário pode adicionar ou remover animes conforme necessário.

![Tela de Animes Pretendo Assistir](/path/to/pretendo_assistir.png)

## Documentação

A documentação completa do Anime List App pode ser encontrada em [link_para_documentação](https://exemplo.com).

## Tecnologias Utilizadas

- React Native
- Expo
- NativeWind
- JavaScript
- Firebase (Firebase Authentication)
- GraphQL (para comunicação com a API Anilist.co)
- Anilist.co API (para obtenção de dados sobre animes)

## Pré-requisitos

- Node.js (versão X.X.X)
- Expo CLI (versão X.X.X)
- Firebase account (para configurar o Firebase Authentication)
- Anilist.co API key (para acesso aos dados dos animes)

## Instalação

1. Clone o repositório do Anime List App.
2. Navegue até o diretório do projeto e execute o comando `npm install` para instalar as dependências.
3. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente necessárias, como as chaves de API do Firebase e Anilist.co.
4. Execute o comando `expo start` para iniciar o aplicativo usando o Expo.
5. Abra o aplicativo Expo Go no emulador ou dispositivo físico para visualizar o Anime List App.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para o projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com uma descrição clara da sua contribuição: `git checkout -b minha-contribuicao`.
3. Faça as alterações e adições desejadas.
4. Commit suas mudanças: `git commit -m 'Minha contribuição'`.
5. Push para o branch remoto: `git push origin minha-contribuicao`.
6. Abra um pull request para que possamos revisar as alterações.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
