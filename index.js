
Buffer.prototype.readUInt24LE = function(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 3, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) +
      (this[offset + 2] << 16));
};

Buffer.prototype.readUInt24BE = function(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 3, this.length);

  return ((this[offset] << 16) |
      (this[offset + 1] << 8) +
      (this[offset + 2]));
};

Buffer.prototype.readInt24LE = function(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 3, this.length);

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16);
};

Buffer.prototype.readInt24BE = function(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 3, this.length);

  return (this[offset] << 16) |
      (this[offset + 1] << 8) |
      (this[offset + 2]);
};

Buffer.prototype.writeUInt24LE = function(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 3, 0xffffffff, 0);
  this[offset] = value;
  this[offset + 1] = (value >>> 8);
  this[offset + 2] = (value >>> 16);
  return offset + 3;
};

Buffer.prototype.writeUInt24BE = function(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 3, 0xffffffff, 0);
  this[offset] = (value >>> 16);
  this[offset + 1] = (value >>> 8);
  this[offset + 2] = value;
  return offset + 3;
};

Buffer.prototype.writeInt24LE = function(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 3, 0x7fffffff, -0x80000000);
  this[offset] = value;
  this[offset + 1] = (value >>> 8);
  this[offset + 2] = (value >>> 16);
  return offset + 3;
};

Buffer.prototype.writeInt24BE = function(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 3, 0x7fffffff, -0x80000000);
  this[offset] = (value >>> 16);
  this[offset + 1] = (value >>> 8);
  this[offset + 2] = value;
  return offset + 3;
};

function checkOffset(offset, ext, length) {
  if (offset + ext > length)
    throw new RangeError('index out of range');
}

function checkInt(buffer, value, offset, ext, max, min) {
  if (!(buffer instanceof Buffer))
    throw new TypeError('buffer must be a Buffer instance');
  if (value > max || value < min)
    throw new TypeError('value is out of bounds');
  if (offset + ext > buffer.length)
    throw new RangeError('index out of range');
}

module.exports = Buffer;
