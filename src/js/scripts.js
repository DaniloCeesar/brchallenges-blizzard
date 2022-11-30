const app = () => {
    return {
        selected_game_index: 0,
        selected_game: {},

        featured_games: [
            {
                "title": "Diablo IV",
                "header": "Retorne à escuridão com o game Diablo IV",
                "description": "O retorno de Lilith traz uma era de escuridão e sofrimento",
                "badge": "/public/assets/banner-hero/icons/game-1.png",
                "background": "/public/assets/banner-hero/games/diablo-bg.png",
                "logo": "/public/assets/banner-hero/games/diablo-logo.png",
                "trailer": "/public/assets/banner-hero/games/diablo-animation.gif",
                "trailer-static": "/public/assets/banner-hero/games/diablo-animation-cover.png"
            },
            {
                "title": "Hearthstone",
                "header": "Nova pacote de expansão de Hearthstone",
                "description": "A Hora e a Aliança se encontraram no Vale Alterac para lutar",
                "badge": "/public/assets/banner-hero/icons/game-2.png",
                "background": "/public/assets/banner-hero/games/hearthstone-bg.png",
                "logo": "/public/assets/banner-hero/games/hearthstone-logo.png",
                "trailer": "/public/assets/banner-hero/games/hearthstone-animation.gif",
                "trailer-static": "/public/assets/banner-hero/games/hearthstone-animation-cover.png"
            },
            {
                "title": "Shadowlands",
                "header": "Desbrave as Terras Sombrias em Shadowlands!",
                "description": "O que jaz além do mundo que você conhece?",
                "badge": "/public/assets/banner-hero/icons/game-3.png",
                "background": "/public/assets/banner-hero/games/wow-bg.png",
                "logo": "/public/assets/banner-hero/games/wow-logo.png",
                "trailer": "/public/assets/banner-hero/games/wow-animation.gif",
                "trailer-static": "/public/assets/banner-hero/games/wow-animation-cover.png"
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

        async setFeaturedGame(index) {
            this.selected_game_index = String(index);
            this.selected_game = this.featured_games[this.selected_game_index];

            // console.log('Featured Game selecionado:\t', this.selected_game_index, "\n", this.selected_game);
        },

        init() {
            this.games = this.getAllGames();
            this.setFeaturedGame(this.selected_game_index);
        }
    }
}