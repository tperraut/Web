/**
 * Created by tperrau on 16/01/17.
 */
var Sprite = function (v, w, h, m, dom) {
    Body.call(this, v, w, h, m);
    Object.defineProperty(this, "dom", {value : dom, writable : false});
};

Sprite.prototype = Object.create(Body.prototype);
Sprite.prototype.constructor = Sprite;

Sprite.prototype.draw = function () {
    this.display.style.left = this.origin.x + "px";
    this.display.style.top = this.origin.y + "px";
    this.display.style.width = this.width + "px";
    this.display.style.height = this.height + "px";
};

