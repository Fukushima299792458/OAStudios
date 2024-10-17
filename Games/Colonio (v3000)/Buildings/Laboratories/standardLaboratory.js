class StandardLaboratory {
    constructor() {
        this.standardLaboratory = standardLaboratories.length;
        this.preview = true;
        this.encroached = false;
        this.x = x;
        this.y = y;
        this.r = 10;
        this.level = 1;
        this.consumption = 0;
        this.maxConsumption = 0;
        this.maxOccupancy = 2;
        this.currentMaxOccupancy = 0;
        this.occupancy = 0;
        this.materials = [
            // aluminium
            0,
            // silicon
            20,
            // carbon
            20,
            // computerParts 
            20
        ];
    }

    display() {
        stroke(0, 0, 0);
        strokeWeight(1);
        // checks for obstruction when being previewed to be built
        if (this.preview) {
            this.x = mouseX
            this.y = mouseY
            this.encroached = false;
            stroke(0, 255, 0);
            for (let a = 0; a < buildings.length; a++) {
                for (let b = 0; b < buildings[a].length; b++) {
                    for (let c = 0; c < buildings[a][b].length; c++) {
                        if (buildings[a][b][c].r) {
                            if (Math.sqrt(Math.pow(this.x - buildings[a][b][c].x, 2) + Math.pow(this.y - buildings[a][b][c].y, 2)) < buildings[a][b][c].r + this.r && !buildings[a][b][c].preview && a != 1) {
                                stroke(255, 0, 0);
                                strokeWeight(3);
                                this.encroached = true;
                            }
                        } else if (buildings[a][b][c].wx) {
                            if (Math.abs(this.x - buildings[a][b][c].x) < this.r + (buildings[a][b][c].wx / 2) && Math.abs(this.y - buildings[a][b][c].y) < this.r + (buildings[a][b][c].wy / 2) && !buildings[a][b][c].preview && a != 1) {
                                stroke(255, 0, 0);
                                strokeWeight(3);
                                this.encroached = true;
                            }
                        }
                    }
                }
            }
        }

        this.r = Math.sqrt((this.level * 12) / Math.PI);

        context.fillStyle = "#ffffff";
        if (!(mHrs > 6 && mHrs < 15)) {
            context.fillStyle = "#e0e0e0";
            this.consumption = 0.01 * (this.maxConsumption * (this.currentMaxOccupancy / this.maxOccupancy));
        } else if (weather == "storm") {
            context.fillStyle = "#ffd080";
            this.consumption = 0.01 * (this.maxConsumption * (this.currentMaxOccupancy / this.maxOccupancy));
        } else {
            this.consumption = this.maxConsumption * (this.currentMaxOccupancy / this.maxOccupancy);
        }

        // checks if the lab has power and changes its current max occupancy accordingly
        if (totalPowerCapacity) {
            this.maxOccupancy = this.level * 2;
            this.r = Math.sqrt((this.level * 12) / Math.PI);
            this.maxConsumption = this.maxOccupancy + this.maxOccupancy * 2.5;
            this.currentMaxOccupancy = this.maxOccupancy;
        } else {
            this.currentMaxOccupancy = 0;
        }

        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    
    displayStats() {
        // display specific stats at a specific angle dependent on location reletively to edges if mouse is over lab
        if (!this.preview) {
            if (Math.sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2)) < this.r) {
                context.fillStyle = "white";
                context.font = "10px Verdana";
                stroke(0, 0, 0);
                strokeWeight(1);
                if (this.x < width - 170 && this.y > 50) {
                    rect(this.x, this.y - 50, 170, 50);
                    context.fillStyle = "black";
                    context.fillText(`Level: ${this.level}`, this.x, this.y - 40, 170);
                    context.fillText(`Users: ${this.occupancy}/${this.maxOccupancy}`, this.x, this.y - 30, 170);
                    context.fillText(`Max Consumption: ${this.maxConsumption + 1}`, this.x, this.y - 20, 170);
                    context.fillText(`Consumption: ${Math.round(this.consumption)}`, this.x, this.y - 10, 170);
                } else if (this.x > width - 170 && this.y < 50) {
                    rect(this.x - 170, this.y, 170, 50);
                    context.fillStyle = "black";
                    context.fillText(`Level: ${this.level}`, this.x - 170, this.y + 10, 170);
                    context.fillText(`Users: ${this.occupancy}/${this.maxOccupancy}`, this.x - 170, this.y + 20, 170);
                    context.fillText(`Max Consumption: ${this.maxConsumption + 1}`, this.x - 170, this.y + 30, 170);
                    context.fillText(`Consumption: ${Math.round(this.consumption)}`, this.x - 170, this.y + 40, 170);
                } else if (this.x > width - 170) {
                    rect(this.x - 170, this.y - 50, 170, 50);
                    context.fillStyle = "black";
                    context.fillText(`Level: ${this.level}`, this.x - 170, this.y - 40, 170);
                    context.fillText(`Inhabitants: ${this.occupancy}/${this.maxOccupancy}`, this.x - 170, this.y - 30, 170);
                    context.fillText(`Max Consumption: ${this.maxConsumption + 1}`, this.x - 170, this.y - 20, 170);
                    context.fillText(`Consumption: ${Math.round(this.consumption)}`, this.x - 170, this.y - 10, 170);
                } else if (this.y < 50) {
                    rect(this.x, this.y, 170, 50);
                    context.fillStyle = "black";
                    context.fillText(`Level: ${this.level}`, this.x, this.y + 10, 170);
                    context.fillText(`Users: ${this.occupancy}/${this.maxOccupancy}`, this.x, this.y + 20, 170);
                    context.fillText(`Max Consumption: ${this.maxConsumption + 1}`, this.x, this.y + 30, 170);
                    context.fillText(`Consumption: ${Math.round(this.consumption)}`, this.x, this.y + 40, 170);
                }
                context.fillStyle = "white";
            }
        }
    }

    consumeFuel() {
        // performed in display to reduce lag when registering occupancy, function left to reduce errors
    }
}
