const TEXT_COLOR = '#ffffff';

export default class TitleScene extends Phaser.Scene {
    constructor() {
        super("TitleScene")
    }

    preload() {
        this.load.image('background', 'src/assets/background.jpg');
    }

    async create() {
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);
        this.background.alpha = 0.3;
        this.background.displayWidth = this.sys.game.config.width;
        this.background.displayHeight = this.sys.game.config.height;
        this.background.depth = -1;

        const startText = this.add.text(this.game.config.width/2 - 100, this.game.config.height/2, 'Start Game',
            { fontSize: '32px', fill: TEXT_COLOR });
        startText.setInteractive({ useHandCursor: true });
        startText.on('pointerdown', () => this.startButton());

        const jumpingUpGame = this.add.text(this.game.config.width/2 - 175, this.game.config.height/2 + 70,
            'Game 2 - Jumping Up', { fontSize: '32px', fill: TEXT_COLOR });
        jumpingUpGame.setInteractive({ useHandCursor: true });
        jumpingUpGame.on('pointerdown', () => this.game2JumpingUp());

        const leaderboardText = this.add.text(this.game.config.width/2 - 110, this.game.config.height/2 + 140,
            'Leaderboard', { fontSize: '32px', fill: TEXT_COLOR });
        leaderboardText.setInteractive({ useHandCursor: true });
        leaderboardText.on('pointerdown', () => this.leaderboardButton());
        const username = localStorage.getItem('phaser_username');
        if (!username) {
            const name = prompt('Please enter your name:');
            localStorage.setItem('phaser_username', name);
        }
    }

    startButton() {
        this.scene.start('GameScene');
    }

    game2JumpingUp(){
        this.scene.start('GameJumpingUpScene');
    }

    leaderboardButton(){
        this.scene.start('LeaderboardScene');
    }
}