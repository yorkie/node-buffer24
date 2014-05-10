
var Buffer = require('./index');
var test = require('tape');

test('readUInt24LE', function(t) {
  var buf = new Buffer([ 0x03, 0x02, 0x01, 0x00 ]);
  t.equal(typeof buf.readUInt24LE, 'function');
  t.equal(buf.readUInt24LE(0), 0x010203);
  t.end();
});

test('readUInt24LE', function(t) {
  var buf = new Buffer([ 0x03, 0x02, 0x01, 0x00 ]);
  t.equal(typeof buf.readUInt24BE, 'function');
  t.equal(buf.readUInt24BE(0), 0x030201);
  t.end();
});

test('readInt24LE', function(t) {
  var buf = new Buffer([ 0x03, 0x02, 0x01, 0x00 ]);
  t.equal(typeof buf.readInt24LE, 'function');
  t.equal(buf.readInt24LE(0), 0x010203);
  t.end();
});

test('readInt24LE', function(t) {
  var buf = new Buffer([ 0x03, 0x02, 0x01, 0x00 ]);
  t.equal(typeof buf.readInt24BE, 'function');
  t.equal(buf.readInt24BE(0), 0x030201);
  t.end();
});

test('writeUInt24LE', function(t) {
  var buf = new Buffer(4);
  t.equal(typeof buf.writeUInt24LE, 'function');

  buf.fill(0, 0, 4);
  buf.writeUInt24LE(0xff, 0);
  t.equal(buf[0], 0xff);

  buf.writeUInt24LE(0xffee, 0);
  t.equal(buf[0], 0xee);
  t.equal(buf[1], 0xff);

  buf.writeUInt24LE(0xffee00, 0);
  t.equal(buf[0], 0x00);
  t.equal(buf[1], 0xee);
  t.equal(buf[2], 0xff);
  t.end();
});

test('writeUInt24BE', function(t) {
  var buf = new Buffer(4);
  t.equal(typeof buf.writeUInt24BE, 'function');

  buf.fill(0, 0, 4);
  buf.writeUInt24BE(0xff, 0);
  t.equal(buf[2], 0xff);

  buf.writeUInt24BE(0xffee, 0);
  t.equal(buf[2], 0xee);
  t.equal(buf[1], 0xff);

  buf.writeUInt24BE(0xffee00, 0);
  t.equal(buf[2], 0x00);
  t.equal(buf[1], 0xee);
  t.equal(buf[0], 0xff);
  t.end();
});


test('writeInt24LE', function(t) {
  var buf = new Buffer(4);
  t.equal(typeof buf.writeInt24LE, 'function');

  buf.fill(0, 0, 4);
  buf.writeInt24LE(0xff, 0);
  t.equal(buf[0], 0xff);

  buf.writeUInt24LE(0xffee, 0);
  t.equal(buf[0], 0xee);
  t.equal(buf[1], 0xff);

  buf.writeUInt24LE(0xffee00, 0);
  t.equal(buf[0], 0x00);
  t.equal(buf[1], 0xee);
  t.equal(buf[2], 0xff);
  t.end();
});

test('writeInt24BE', function(t) {
  var buf = new Buffer(4);
  t.equal(typeof buf.writeInt24BE, 'function');

  buf.fill(0, 0, 4);
  buf.writeUInt24BE(0xff, 0);
  t.equal(buf[2], 0xff);

  buf.writeUInt24BE(0xffee, 0);
  t.equal(buf[2], 0xee);
  t.equal(buf[1], 0xff);

  buf.writeUInt24BE(0xffee00, 0);
  t.equal(buf[2], 0x00);
  t.equal(buf[1], 0xee);
  t.equal(buf[0], 0xff);
  t.end();
});
