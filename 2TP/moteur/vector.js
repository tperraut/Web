/**
 * Created by tperrau on 16/01/17.
 */
var Vector = function (x, y) {
    Object.defineProperty(this, "x", {value : x, writable : false});
    Object.defineProperty(this, "y", {value : y, writable : false});
};

Vector.prototype.mult = function (k) {
    return new Vector(this.x * k, this.y * k);
};

Vector.prototype.dot = function (v) {
    return this.x * v.x + this.y * v.y;
};

Vector.prototype.norm = function () {
    return Math.sqrt(this.dot(this));
};

Vector.prototype.normalize = function () {
    return this.mult(1 / this.norm());
};

Vector.prototype.zero = function () {
    return new Vector(0, 0);
};


