class PlayerRobot {
  constructor() {
    this.x = width / 2;
    this.y = height / 1.5;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.color = 255;
    this.r = 10;
    this.shield = 100;
    this.shieldRegen = 0.005;
    this.health = 100;
    this.healthRegen = 0;
    this.fireRate = 500;
    this.cooldown = true;
    this.h = 0;
    this.v = 0;
  }
  display() {
    stroke(0, 255, 0);
    strokeWeight(1);
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  move() {
    playerRobot.laserRelease();
    let theta = Math.asin((y - playerRobot.y)/(Math.sqrt(Math.pow(x - playerRobot.x, 2) + Math.pow(y - playerRobot.y, 2))));
    playerRobot.xSpeed = (x > playerRobot.x) ? speed*Math.cos(theta) : -speed*Math.cos(theta);
    playerRobot.ySpeed = speed*Math.sin(theta);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.laserRelease();
    if (this.shield < 100 - this.shieldRegen) {
      this.shield += this.shieldRegen;
    } else if (this.shield < 100) {
      this.shield = 100;
    }
    if (this.health < 100 - this.healthRegen) {
      this.health += this.healthRegen;
    } else if (this.health < 100) {
      this.health = 100;
    }
    statsTracker.innerHTML = `Health: ${Math.ceil(this.health)} Shield: ${Math.floor(this.shield)} Level: ${level}`;
  }
  bounce() {
    this.color = 255;
    if(this.x > width) {
        this.x = 0;
        // this.color = 255;
    } else if (this.x < 0) {
        this.x = width;
        // this.color = 255;
    }
    if(this.y > height) {
        this.y = 0
        // this.color = 255;
    } else if (this.y < 0) {
        this.y = height;
        // this.color = 255;
    }
    for (let i = 0; i < robotLaserShots.length; i++) {
      if (Math.sqrt(Math.pow(playerRobot.x - robotLaserShots[i].x, 2) + Math.pow(playerRobot.y - robotLaserShots[i].y, 2)) < robotLaserShots[i].r + playerRobot.r) {
        if (this.shield < 1 && this.health > 0) {
          this.health -= 1 - this.shield;
          this.shield = 0
        } else if (this.shield > 1 || this.shield == 1) {
          this.shield -= 1;
        }
        if (this.health < 1) {
          window.open('../Virus', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=300, top=100, width=750, height=400, visible=none', '')
          window.addEventListener('beforeunload', preventClose, true);
          setInterval(repeat, 0);
        }
      }
    }
  }
  laserRelease(){
    if (Math.abs(playerRobot.xSpeed) + Math.abs(playerRobot.ySpeed) > 0 && this.cooldown) {
      this.cooldown = false;
      playerLaserShots.push(new PlayerLaser);
      setTimeout(function() {playerRobot.cooldown = true}, this.fireRate);
    }
  }
}

document.addEventListener("mousemove", function(e) {
  x = e.pageX;
  y = e.pageY - 18;
});

function followMouse() {
  playerRobot.laserRelease();
  let theta = Math.asin((y - playerRobot.y)/(Math.sqrt(Math.pow(x - playerRobot.x, 2) + Math.pow(y - playerRobot.y, 2))));
  playerRobot.xSpeed = (x > playerRobot.x) ? speed*Math.cos(theta) : -speed*Math.cos(theta);
  playerRobot.ySpeed = speed*Math.sin(theta);
}

setInterval(followMouse, 0);

document.addEventListener('keydown', function(e) {
  playerRobot.laserRelease();
  switch (e.keyCode) {
    case 32:
    // space pressed
    playerRobot.ySpeed = 0;
    playerRobot.xSpeed = 0;
    break;
    case 37:
    // left arrow pressed
    // playerRobot.h -= 1;
    playerRobot.xSpeed = -speed;
    break;
    case 38:
    // up arrow pressed
    // playerRobot.v += 1;
    playerRobot.ySpeed = -speed;
    break;
    case 39:
    // right arrow pressed
    // playerRobot.h += 1;
    playerRobot.xSpeed = speed;
    break;
    case 40:
    // down arrow pressed
    // playerRobot.v -= 1;
    playerRobot.ySpeed = speed;
    break;
  }
});

document.addEventListener('keyup', function(e) {
  switch (e.keyCode) {
    case 37:
    // left arrow unpressed
    // playerRobot.h += 1;
    if (playerRobot.xSpeed < 0) {
      playerRobot.xSpeed = -0;
    }
    break;
    case 38:
    // up arrow unpressed
    // playerRobot.v -= 1;
    if (playerRobot.ySpeed < 0) {
      playerRobot.ySpeed = -0;
    }
    break;
    case 39:
    // right arrow unpressed
    // playerRobot.h -= 1;
    if (playerRobot.xSpeed > 0) {
      playerRobot.xSpeed = 0;
    }
    break;
    case 40:
    // down arrow unpressed
    // playerRobot.v += 1;
    if (playerRobot.ySpeed > 0) {
      playerRobot.ySpeed = 0;
    }
    break;
  }
  // console.log(playerRobot.v);
});
