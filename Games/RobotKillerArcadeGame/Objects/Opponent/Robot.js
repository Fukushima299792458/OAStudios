class Robot {
  constructor() {
    level += 1;
    this.robot = robots.length;
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random() * height);
    let theta = Math.random()*360;
    this.xSpeed = speed*Math.sin(theta);
    this.ySpeed = speed*Math.cos(theta);
    console.log(speed);
    console.log(5/speed);
    this.color = 255;
    this.r = 10;
    this.fireRate = 500;
    this.robotLaserShots = [];
    this.health = 10;
    this.healthRegen = 0;
    this.shield = 0;
    this.shieldRegen = 0;
    this.fire = setInterval(this.laserRelease, this.fireRate, this.robot);
  }
  display() {
    stroke(255, 0, 0);
    strokeWeight(1);
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);

    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.shield < 0 - this.shieldRegen) {
      this.shield += this.shieldRegen;
    } else if (this.shield < 0) {
      this.shield = 0;
    }
    if (this.health < 10 - this.healthRegen) {
      this.health += this.healthRegen;
    } else if (this.health < 10) {
      this.health = 10;
    }

    if(this.x > width || this.x < 0) {
      if (this.x > width) {
        // if (this.xSpeed > 0) {
          this.xSpeed = -Math.abs(this.xSpeed)*(1 + 0.1 / robots.length);
          this.ySpeed *= 1 + 0.1 / robots.length;
        // } else {
          this.x = width;
        // }
      } else if (this.x < 0) {
        // if (this.xSpeed < 0) {
          this.xSpeed = Math.abs(this.xSpeed)*(1 + 0.1 / robots.length);
          this.ySpeed *= 1 + 0.1 / robots.length;
        // } else {
          this.x = 0;
        // }
      }
      if (Math.pow(this.xSpeed, 2) + Math.pow(this.ySpeed, 2) < Math.pow(2*speed, 2)) {
        this.color = 255;
      } else if ((200 / robots.length) < this.fireRate) {
        // if (this.xSpeed > this.ySpeed) {
        //   this.xSpeed /= 2;
        // } else {
        //   this.ySpeed /= 2;
        // }
        this.fireRate *= 1 - (0.1 / robots.length);
        clearInterval(this.fire);
        this.fire = setInterval(this.laserRelease, this.fireRate, this.robot);
      } else {
        let theta = Math.random()*360;
        this.xSpeed = speed*Math.sin(theta);
        this.ySpeed = speed*Math.cos(theta);
        this.fireRate = 500;
        clearInterval(this.fire);
        this.fire = setInterval(this.laserRelease, this.fireRate, this.robot);
        robots.push(new Robot);
      }
    }
    if (this.y > height || this.y < 0) {
      if (this.y > height) {
        // if (this.ySpeed > 0) {
          this.ySpeed = -Math.abs(this.ySpeed)*(1 + 0.1 / robots.length);
          this.xSpeed *= 1 + 0.1 / robots.length;
        // } else {
          this.y = height;
        // }
      } else if (this.y < 0) {
        // if (this.ySpeed < 0) {
          this.ySpeed = Math.abs(this.ySpeed)*(1 + 0.1 / robots.length);
          this.xSpeed *= 1 + 0.1 / robots.length;
        // } else {
          this.y = 0;
        // }
      }

      if (Math.pow(this.xSpeed, 2) + Math.pow(this.ySpeed, 2) < Math.pow(2*speed, 2)) {
        this.color = 255;
      } else if ((200 / robots.length) < this.fireRate) {
        // if (this.xSpeed > this.ySpeed) {
        //   this.xSpeed /= 2;
        // } else {
        //   this.ySpeed /= 2;
        // }
        this.fireRate *=  1 - (0.1 / robots.length);
        clearInterval(this.fire)
        this.fire = setInterval(this.laserRelease, this.fireRate, this.robot);
      } else {
        let theta = Math.random()*360;
        this.xSpeed = speed*Math.sin(theta);
        this.ySpeed = speed*Math.cos(theta);
        this.fireRate = 500;
        clearInterval(this.fire)
        this.fire = setInterval(this.laserRelease, this.fireRate, this.robot);
        robots.push(new Robot);
      }
    }
    for (let i = 0; i < playerLaserShots.length; i++) {
      if (Math.sqrt(Math.pow(this.x - playerLaserShots[i].x, 2) + Math.pow(this.y - playerLaserShots[i].y, 2)) < playerLaserShots[i].r + this.r) {
        // playerLaserShots[i].x = -10000;
        if (this.shield < 1 && this.health > 0) {
          this.health -= 1 - this.shield;
          this.shield = 0
        } else if (this.shield > 1 || this.shield == 1) {
          this.shield -= 1;
        }
        console.log(this.health);
      }
    }
  }
  laserRelease(robot) {
    if (robots[robot]) {
      robotLaserShots.push(new RobotLaser(robot));
      console.log("ss");
    }
  }
  die() {
    if (this.health <= 0) {
      for (let i = 0; i < robots.length; i++) {
        if (i > this.robot || robots[i].robot > robots.length - 1) {
          if (robots[i].robot - 1 >= 0) {
            robots[i].robot -= 1;
          }
        }
      }
      robots.splice(this.robot, 1);
    }
  }
}
