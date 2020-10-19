class dustbin extends trash {
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.image = loadImage("dustbingreen.png");
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 130, 130);

    }
};