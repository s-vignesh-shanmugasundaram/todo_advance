const _0x25b09f = _0x4e23;
function _0x23fe() {
  const _0x2ba6ce = [
    "5HcnfbA",
    "Schema",
    "mongoose",
    "3360984kUeLIl",
    "1358580CPPwCI",
    "9676683GWnRZP",
    "2316984owUyzb",
    "inprogress",
    "Must\x20be\x20Provided\x20Title..!)",
    "33360820BOLOsE",
    "164tSfEBL",
    "exports",
    "completed",
    "Task",
    "10612ENkxiD",
    "6959820TFKbHz",
    "open",
    "8srpYLh",
  ];
  _0x23fe = function () {
    return _0x2ba6ce;
  };
  return _0x23fe();
}
function _0x4e23(_0x5459de, _0x5d3149) {
  const _0x23fe07 = _0x23fe();
  return (
    (_0x4e23 = function (_0x4e23fc, _0x23eca0) {
      _0x4e23fc = _0x4e23fc - 0x134;
      let _0x38552c = _0x23fe07[_0x4e23fc];
      return _0x38552c;
    }),
    _0x4e23(_0x5459de, _0x5d3149)
  );
}
(function (_0x17489f, _0x3687c6) {
  const _0x223e84 = _0x4e23,
    _0x342f0c = _0x17489f();
  while (!![]) {
    try {
      const _0x19d962 =
        (parseInt(_0x223e84(0x13f)) / 0x1) *
          (-parseInt(_0x223e84(0x13b)) / 0x2) +
        -parseInt(_0x223e84(0x137)) / 0x3 +
        -parseInt(_0x223e84(0x134)) / 0x4 +
        (parseInt(_0x223e84(0x143)) / 0x5) *
          (-parseInt(_0x223e84(0x135)) / 0x6) +
        -parseInt(_0x223e84(0x140)) / 0x7 +
        (-parseInt(_0x223e84(0x142)) / 0x8) *
          (-parseInt(_0x223e84(0x136)) / 0x9) +
        parseInt(_0x223e84(0x13a)) / 0xa;
      if (_0x19d962 === _0x3687c6) break;
      else _0x342f0c["push"](_0x342f0c["shift"]());
    } catch (_0x5c22e2) {
      _0x342f0c["push"](_0x342f0c["shift"]());
    }
  }
})(_0x23fe, 0xacced);
const { mongoose } = require(_0x25b09f(0x145)),
  taskSchema = new mongoose[_0x25b09f(0x144)]({
    title: { type: String, required: [!![], _0x25b09f(0x139)] },
    description: {
      type: String,
      trim: !![],
      required: [!![], "A\x20Task\x20must\x20have\x20a\x20description\x20!"],
    },
    due_date: { type: Date, min: Date["now"]() },
    lable: { type: String, trim: !![], default: "Lable" },
    taskStatus: {
      type: String,
      enum: [_0x25b09f(0x141), _0x25b09f(0x138), _0x25b09f(0x13d)],
      default: _0x25b09f(0x141),
    },
  }),
  Task = mongoose["model"](_0x25b09f(0x13e), taskSchema);
module[_0x25b09f(0x13c)] = Task;
