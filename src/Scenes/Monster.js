class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        
        this.Skey = null;
        this.FKey = null;
        this.Akey = null;
        this.DKey = null;

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;    
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // Create the main body sprite
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
       
       //Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        //Arms
        my.sprite.arm1 = this.add.sprite(this.bodyX+100, this.bodyY+30, "monsterParts", "arm_greenA.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX-90, this.bodyY+30, "monsterParts", "arm_greenB.png");
        my.sprite.arm2.flipX = true;
        //Legs
        my.sprite.leg1 = this.add.sprite(this.bodyX+60, this.bodyY+150, "monsterParts", "leg_greenA.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX-60, this.bodyY+140, "monsterParts", "leg_greenB.png");
        my.sprite.leg2.flipX = true;
        //Ears
        my.sprite.ear1 = this.add.sprite(this.bodyX-30, this.bodyY-90, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.ear2 = this.add.sprite(this.bodyX+20, this.bodyY-100, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.ear2.flipX = true;
        //Mouth (Smile)
        my.sprite.Smouth = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthC.png");
        //Mouth(Fang)
        my.sprite.Fmouth = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthB.png");
        //Eye
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-10, "monsterParts", "eye_red.png");        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //Smile Code
        if (this.SKey.isDown){
            my.sprite.Smouth.visible = true;  
            my.sprite.Fmouth.visible = false;
        }
        //Fang Code
        else if (this.FKey.isDown){
            my.sprite.Fmouth.visible = true;  
            my.sprite.Smouth.visible = false;
        }
       
        for (let everything in my.sprite){
            //Move Left Code
            if (this.AKey.isDown){
                my.sprite[everything].x -= 10;
            }
            //Move Right Code
            if(this.DKey.isDown){
                my.sprite[everything].x += 10;
            }
        }
    }
}