/**
 * Created by tperrau on 16/01/17.
 */
var Rect = function (v, w, h) {
    this.origin = v;
    Object.defineProperty(this, "width", {value : w, writable : false});
    Object.defineProperty(this, "height", {value : h, writable : false});
};

Rect.prototype.move = function (v) {
    this.origin = this.origin.add(v);
};

Rect.prototype.mDiff =  function () {
    return (new Rect(
        new Vector(r.origin.x - this.origin.y - this.width,
            r.origin.y - this.origin.y - this.height),
        r.width + this.width,
        r.height + this.height));
};

Rect.prototype.hasOrigin = function () {
    return (this.origin.x < 0
    && this.origin.y > 0
    && this.origin.x + this.width > 0
    && this.origin.y + this.height < 0);
};