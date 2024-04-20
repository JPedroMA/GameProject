let playerState = 'correndo';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;


let gameFrame = 0;
const staggerFrames = 10; // the higher this are the slower the animation
const spriteAnimations = [];
const animationStates = [
    {
        name: 'parado',
        frames: 7,
    },
    {
        name: 'pulando',
        frames: 7,
    },
    {
        name: 'caindo',
        frames: 7,
    },
    {
        name: 'correndo',
        frames: 9,
    },
    {
        name: 'atordoado',
        frames: 11,
    },
    {
        name: 'sentar',
        frames: 5,
    },
    {
        name: 'rolar',
        frames: 7,
    },
    {
        name: 'morder',
        frames: 4,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'atacado',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(animationStates);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();