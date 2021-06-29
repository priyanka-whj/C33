class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50); //call base class constructor function
        this.image = loadImage("sprites/bird.png");
  
    }
    display()
    {
        super.display(); //call display() of the base class
    }
};