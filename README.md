
node-buffer24
==================
node buffer extension: support 24bit operators

### Installation
```sh
$ npm install buffer24
```

### API

##### buf.readUInt24LE(offset, [noAssert])
##### buf.readUInt24BE(offset, [noAssert])

* `offset` Number

* `noAssert` Boolean, Optional, Default: false

##### buf.readInt24LE(offset, [noAssert])
##### buf.readInt24BE(offset, [noAssert])

* `offset` Number

* `noAssert` Boolean, Optional, Default: false

##### buf.writeUInt24LE(value, offset, [noAssert])
##### buf.writeUInt24BE(value, offset, [noAssert])

* `value` Number

* `offset` Number

* `noAssert` Boolean, Optional, Default: false

##### buf.writeInt24LE(value, offset, [noAssert])
##### buf.writeInt24BE(value, offset, [noAssert])

* `value` Number

* `offset` Number

* `noAssert` Boolean, Optional, Default: false

### License
MIT
