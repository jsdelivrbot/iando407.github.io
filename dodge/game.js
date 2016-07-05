var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
var backgroundImage;
var gameScore;
var gameStart;
var moreEnemies;
var Enemies2;

function preload() {
    playerImage = loadImage("2.jpg");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png")
}

function setup() {
    createCanvas(600,600);
    gameStart = true
    isGameOver = false;
    player = createSprite(width/2,height-(playerImage.height/2),0,0)
    player.addImage(playerImage);
    enemy = createSprite(width/2,height/2,0,0);
    enemy.addImage(enemyImage);
    moreEnemies = createSprite(3*width/4,-10,0,0);
    moreEnemies.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    moreEnemies.rotationSpeed = -4.0;
    score = 0
}

function draw() {
    if (gameStart) {
        gamestarted();
    } else {
        
        if (isGameOver) {
            gameOver();
            } else {
        
            background(backgroundImage);
    
            if (keyDown(RIGHT_ARROW) && player.position.x < (width- (playerImage.width/2))) {
            player.position.x = player.position.x + 3;
            }
    
            if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
            player.position.x = player.position.x - 3;
            }
    
            if (keyDown(UP_ARROW) && player.position.y > (playerImage.height/2)) {
            player.position.y = player.position.y - 3;
            }
    
            if (keyDown(DOWN_ARROW) && player.position.y < (600-(playerImage.height/2))) {
            player.position.y = player.position.y + 3;
            }
    
            enemy.position.y= enemy.position.y + 6
    
            if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width-5);
            }
        
            if (enemy.overlap(player)) {
            isGameOver = true;
            }
            
            if (moreEnemies.overlap(player)) {
            isGameOver = true;
            }
            
            moreEnemies.position.y= moreEnemies.position.y + 6;
        
            
            if (moreEnemies.position.y > height) {
                moreEnemies.position.y = 0 - Math.abs(random(5,height));
                moreEnemies.position.x = random(5, width-5);
            
            }
    
        drawSprites();
    
        score = score + 1;
    
        gameScore();
        }
    }
}

function gameOver() {
    background(255,0,0)
    textAlign(CENTER);
    fill("white")
    textFont("Comic Sans MS")
    textSize(18)
    text("Game Over!", width/2, 3*height/8);
    text("Click anywhere to try again", width/2, 5*height/8)
    text("Score: " + score, width/2, height/2)
    
}

function mouseClicked() { 
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y =height - (playerImage.height/2);
        enemy.position.x = width/2
        enemy.position.y = 0
        moreEnemies.position.x = 3*width/4
        moreEnemies.position.y = 0
    }    
    
    score = 0
    
    if (gameStart) {
        gameStart = false;
        player.position.x = width/2;
        player.position.y = height - (playerImage.height/2);
        enemy.position.x = width/2
        enemy.position.y = 0
    }
}

function gameScore(){
    fill("white")
    textFont("Comic Sans MS")
    textSize(18)
    text("Score : " + score , (width-120), (25));
}

function gamestarted(){
    background(0)
    fill("white")
    textAlign(CENTER);
    textFont("Comic Sans MS")
    text("Rubber Ducky in Space", width/2,height/2)
    text("Click anywhere to start", width/2, 5*height/8)
}


