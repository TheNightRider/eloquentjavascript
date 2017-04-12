function StreetchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StreetchCell.prototype.minWidth = function () {
    return Math.max(this.width, this.inner.minWidth());
};

StreetchCell.prototype.minHeight = function () {
    return Math.max(this.height, this.inner.minHeight());
};

StreetchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height);
};