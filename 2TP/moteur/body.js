/**
 * Created by tperrau on 16/01/17.
 */
var Body = function (v, w, h, m) {
    Rect.call(this, v, w, h);
    Object.defineProperty(this, "mass", {value : m, writable : false});
    Object.defineProperty(this, "invMass", {value : 1 / m, writable : false});
    this.velocity = Vector.zero;
    this.force = Vector.zero;
};

Body.prototype = Object.create(Rect.prototype);
Body.prototype.constructor = Body;

Body.prototype.collision = function (b) {
    return null;
};