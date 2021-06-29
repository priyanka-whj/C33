class Pig extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50);
        this.image = loadImage("sprites/enemy.png")
    }
    display()
    {
        //console.log(this.body.speed);
        if(this.body.speed < 6)
        {
            super.display(); //calling display() function of the BaseClass (Parent Class)
        }
        else
        {
            World.remove(myWorld, this.body);
        }
    }
};