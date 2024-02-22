const _0x382228 = _0x470e;
(function (_0x54e457, _0x4b29bf) {
  const _0x128c86 = _0x470e,
    _0x36a6f8 = _0x54e457();
  while (!![]) {
    try {
      const _0x4e1d5d =
        (-parseInt(_0x128c86(0x15c)) / 0x1) *
          (-parseInt(_0x128c86(0x15e)) / 0x2) +
        -parseInt(_0x128c86(0x15d)) / 0x3 +
        (-parseInt(_0x128c86(0x157)) / 0x4) *
          (parseInt(_0x128c86(0x14f)) / 0x5) +
        (parseInt(_0x128c86(0x152)) / 0x6) *
          (parseInt(_0x128c86(0x156)) / 0x7) +
        (parseInt(_0x128c86(0x160)) / 0x8) *
          (-parseInt(_0x128c86(0x14e)) / 0x9) +
        (-parseInt(_0x128c86(0x14b)) / 0xa) *
          (parseInt(_0x128c86(0x164)) / 0xb) +
        parseInt(_0x128c86(0x15b)) / 0xc;
      if (_0x4e1d5d === _0x4b29bf) break;
      else _0x36a6f8["push"](_0x36a6f8["shift"]());
    } catch (_0x24784d) {
      _0x36a6f8["push"](_0x36a6f8["shift"]());
    }
  }
})(_0x4334, 0x43db0);
function _0x470e(_0x31b472, _0x416770) {
  const _0x433429 = _0x4334();
  return (
    (_0x470e = function (_0x470ef2, _0x25ef84) {
      _0x470ef2 = _0x470ef2 - 0x14b;
      let _0x21c1e6 = _0x433429[_0x470ef2];
      return _0x21c1e6;
    }),
    _0x470e(_0x31b472, _0x416770)
  );
}
function _0x4334() {
  const _0x112d20 = [
    "11BXlkjV",
    "DB\x20connection\x20successful!",
    "message",
    "4283690uHJVWN",
    "mongoose",
    "log",
    "18JBUTCZ",
    "145ZsmpFp",
    "./App.js",
    "close",
    "1855734fEpxnw",
    "then",
    "Server\x20is\x20running...!",
    "listen",
    "7CFSRYQ",
    "18692lwnXFA",
    "name",
    "connect",
    "DATABASE\x20CONNECTION\x20REJECTED...\x20!",
    "13327764TCDtSY",
    "6421Vvqedk",
    "1535355VyyZHt",
    "126ShDOTf",
    "dotenv",
    "1883408OrqDgn",
    "mongodb+srv://taskProject:1234567890@task.5doedsw.mongodb.net/",
    "unhandledRejection",
    "exit",
  ];
  _0x4334 = function () {
    return _0x112d20;
  };
  return _0x4334();
}
const mongoose = require(_0x382228(0x14c)),
  dotenv = require(_0x382228(0x15f)),
  DB = _0x382228(0x161);
mongoose[_0x382228(0x159)](DB)[_0x382228(0x153)](() =>
  console[_0x382228(0x14d)](_0x382228(0x165))
);
const server = require(_0x382228(0x150))[_0x382228(0x155)](0xbb8, () =>
  console["log"](_0x382228(0x154))
);
process["on"](_0x382228(0x162), (_0x1d7322) => {
  const _0x51a5b4 = _0x382228;
  console[_0x51a5b4(0x14d)](_0x1d7322["name"], _0x1d7322[_0x51a5b4(0x166)]),
    console[_0x51a5b4(0x14d)]("DATABASE\x20CONNECTION\x20REJECTED\x20!"),
    server[_0x51a5b4(0x151)](() => process[_0x51a5b4(0x163)](0x1));
}),
  process["on"]("uncatchExceptation", (_0x57315c) => {
    const _0x3e902f = _0x382228;
    console[_0x3e902f(0x14d)](
      _0x57315c[_0x3e902f(0x158)],
      _0x57315c[_0x3e902f(0x166)]
    ),
      console["log"](_0x3e902f(0x15a)),
      process[_0x3e902f(0x163)](0x1);
  });
