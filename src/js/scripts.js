const app = () => {
    return {
        featured_games: [
            {
                "title": "Diablo IV",
                "header": "Retorne à escuridão com o game Diablo IV",
                "description": "O retorno de Lilith traz uma era de escuridão e sofrimento",
                "badge": "/public/assets/icons-banner-hero/game-1.png",
                "background": "/public/assets/featured/game-1.png",
                "trailer": ""
            },
            {
                "title": "Hearthstone",
                "header": "Nova pacote de expansão de Hearthstone",
                "description": "A Hora e a Aliança se encontraram no Vale Alterac para lutar",
                "badge": "/public/assets/icons-banner-hero/game-2.png",
                "background": "/public/assets/featured/game-2.png",
                "trailer": ""
            },
            {
                "title": "Shadowlands",
                "header": "Desbrave as Terras Sombrias em Shadowlands!",
                "description": "O que jaz além do mundo que você conhece?",
                "badge": "/public/assets/icons-banner-hero/game-3.png",
                "background": "/public/assets/featured/game-3.png",
                "trailer": ""
            }
        ],

        games: [],

        async getAllGames() { // @TODO: Substituir por endpoint externo
            let response = await fetch('/src/js/games.json');
            this.games = await response.json();

            return this.games;
        },

        getUserSystem() { // @TODO: Criar esta função
            return "Linux";
        },

        init() {}
    }
}