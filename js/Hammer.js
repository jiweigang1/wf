(function(){

Hammer = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'hammer');
	this.animations.add('hit');
	game.input.onDown.add(function(){
		this.animations.play('hit', 5, false);
	}, this);
    game.input.onUp.add(function(){
	
	}, this);
    game.input.addMoveCallback(function(pointer, x, y, isDown){
		this.x = x-30;
		this.y = y-30;
	}, this);
	game.add.existing(this);
};

Hammer.prototype = Object.create(Phaser.Sprite.prototype);
Hammer.prototype.constructor = Hammer;


})();