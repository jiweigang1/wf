(function(){

BayGuy = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'badguy');
	this.anchor.setTo(0.5, 1);
	this.__cropRect 	= new Phaser.Rectangle(0, 0, this.width, 0);
	this._upTween 	= game.add.tween(this.__cropRect).to({ height: this.height }, 3000);
	this._downTween = game.add.tween(this.__cropRect).to({ height: 0}, 3000);
    this.crop(this.__cropRect);
	game.add.existing(this);
    this.inputEnabled=true;
	this.events.onInputDown.add(this.onClick,this);
	this._upTween.start();

};

BayGuy.prototype = Object.create(Phaser.Sprite.prototype);
BayGuy.prototype.constructor = BayGuy;


BayGuy.prototype.update = function() {
	this.updateCrop();
};

BayGuy.prototype.onClick=function(){
	this._downTween.start();
}

})();