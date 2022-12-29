const app = () => {
    return {
        modalLogin: false,

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
                "trailer_static": "/public/assets/banner-hero/games/diablo-animation-cover.png",
                "presale": false
            },
            {
                "title": "Hearthstone",
                "header": "Novo pacote de expansão de Hearthstone",
                "description": "A Hora e a Aliança se encontraram no Vale Alterac para lutar",
                "badge": "/public/assets/banner-hero/icons/game-2.png",
                "background": "/public/assets/banner-hero/games/hearthstone-bg.png",
                "logo": "/public/assets/banner-hero/games/hearthstone-logo.png",
                "trailer": "/public/assets/banner-hero/games/hearthstone-animation.gif",
                "trailer_static": "/public/assets/banner-hero/games/hearthstone-animation-cover.png",
                "presale": true
            },
            {
                "title": "Shadowlands",
                "header": "Desbrave as Terras Sombrias em Shadowlands!",
                "description": "O que jaz além do mundo que você conhece?",
                "badge": "/public/assets/banner-hero/icons/game-3.png",
                "background": "/public/assets/banner-hero/games/wow-bg.png",
                "logo": "/public/assets/banner-hero/games/wow-logo.png",
                "trailer": "/public/assets/banner-hero/games/wow-animation.gif",
                "trailer_static": "/public/assets/banner-hero/games/wow-animation-cover.png",
                "presale": true
            }
        ],
        games: [],

        pausedProgressBar: false,

        async getAllGames() {
            let response = await fetch("https://api.brchallenges.com/api/blizzard/games");
            this.games = await response.json();

            return this.games;
        },

        getUserSystem() {
            let browserPlatform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';

            return (browserPlatform.toLowerCase().includes("win")) ? "Windows" : (
                (browserPlatform.toLowerCase().includes("mac")) ? "macOS" :
                    "Linux"
            );
        },

        async setFeaturedGame(index) {
            this.selected_game_index = String(index);
            this.selected_game = this.featured_games[this.selected_game_index];

            // console.log('Featured Game selecionado:\t', this.selected_game_index, "\n", this.selected_game);

            this.updateProgressBar();
        },

        updateProgressBar() {
            const duracao = 100;
            const progressEl = document.querySelector('.banner-progress');

            // @FIX: Reinicializa o método, se já inicializado anteriormente
            if ( typeof bannerTimer !== "undefined" ) {
                progressEl.style.width = 0;
                window.clearInterval(bannerTimer);
            }

            // Obtém o `index` do próximo Selected Game; se não houver próximo item, reinicia a contagem
            let nextGameIndex = parseInt(this.selected_game_index) + 1;
            if ( typeof this.featured_games[nextGameIndex] == "undefined" ) nextGameIndex = 0;

            // Atualiza o Featured Game dentro de um intervalo de tempo
            bannerTimer = window.setInterval(() => {
                let oldProgress = parseInt(progressEl.style.width) || 0;

                if ( this.pausedProgressBar != true )
                    progressEl.style.width = (parseInt(oldProgress) + 100/duracao) + "%"; // `100% (viewport width) / duracao (ms)`

                // Ao atingir `100%`, reinicia a função
                if ( oldProgress == 100 ) {
                    progressEl.style.width = 0; // Zera o valor de progresso
                    window.clearInterval(bannerTimer); // Reseta a função
                    this.setFeaturedGame(nextGameIndex); // Seleciona o próximo Featured Game, que consequentemente reinicia a função
                }
            }, duracao);
        },

        toggleTrailerAnimation(animated = false) {
            let element = document.querySelector('.banner_trailer > img');
            let playButton = document.querySelector('.banner_trailer > .banner_trailer_play');

            if ( element.classList.contains('animated-on') ) {
                element.setAttribute('src', this.selected_game.trailer_static);
                element.classList.remove('animated-on');
                playButton.style.display = 'initial';

                this.pausedProgressBar = false;
            } else {
                element.setAttribute('src', this.selected_game.trailer);
                element.classList.add('animated-on');
                playButton.style.display = 'none';

                this.pausedProgressBar = true;
            }
        },

        init() {
            this.games = this.getAllGames();
            this.setFeaturedGame(this.selected_game_index);
        }
    }
}