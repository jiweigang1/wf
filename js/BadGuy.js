(function(){

BayGuy = function (game, x, y,text) {
	Phaser.Sprite.call(this, game, x, y, 'badguy');
	var self 	= this;
	this._text	= text;
	this._say = ["我爱老婆","我会洗碗滴","我会拖地滴","我要努力干活"]
	this._state	= "down"
	this.anchor.setTo(0.5, 1);
	this.__cropRect 	= new Phaser.Rectangle(0, 0, this.width, 0);
	this._upTween 	= game.add.tween(this.__cropRect).to({ height: this.height }, 300);
	this._upTween.onComplete.add(function(){
		this._state = "up";	
	}, this);
	
	this._downTween = game.add.tween(this.__cropRect).to({ height: 0}, 300);

	this._downTween.onComplete.add(function(){
		this._state = "down";	
	}, this);
	
	
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
	var index =  Math.floor(Math.random()*this._say.length);
	this._text.setText(this._say[index]);
	this._downTween.start();
}

BayGuy.prototype.up = function(){
	if(this._state!=="down"){
		return;
	}
	this._state = "moving";
	this._upTween.start();
}

})();