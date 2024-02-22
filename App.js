function _0x1045(_0x36dc70, _0x5f28a8) {
  const _0x26cb8d = _0x26cb();
  return (
    (_0x1045 = function (_0x10455e, _0x50679d) {
      _0x10455e = _0x10455e - 0x19c;
      let _0x13a4b7 = _0x26cb8d[_0x10455e];
      return _0x13a4b7;
    }),
    _0x1045(_0x36dc70, _0x5f28a8)
  );
}
function _0x26cb() {
  const _0x526cd0 = [
    "3108787weNWyq",
    "json",
    "178477hgiJoo",
    "18248TZqnSv",
    "10oJiJVw",
    "91GZhZfg",
    "8BiPAbo",
    "use",
    "header",
    "./Routers/taskRouter",
    "36TWNbiF",
    "URL\x20not\x20found\x20in\x20the\x20server",
    "Content-Type",
    "18jwzPkn",
    "28109mNUMmj",
    "197142oJVnsD",
    "5724xaZQnM",
    "cors",
    "512515QYlyFj",
    "513ZipowW",
  ];
  _0x26cb = function () {
    return _0x526cd0;
  };
  return _0x26cb();
}
const _0x3f579b = _0x1045;
(function (_0x1f0c40, _0x3a8539) {
  const _0x3cbe3a = _0x1045,
    _0x1bf495 = _0x1f0c40();
  while (!![]) {
    try {
      const _0x3c6ebe =
        (-parseInt(_0x3cbe3a(0x1a2)) / 0x1) *
          (-parseInt(_0x3cbe3a(0x1a1)) / 0x2) +
        -parseInt(_0x3cbe3a(0x1a3)) / 0x3 +
        (-parseInt(_0x3cbe3a(0x1ae)) / 0x4) *
          (parseInt(_0x3cbe3a(0x1a6)) / 0x5) +
        (-parseInt(_0x3cbe3a(0x1a4)) / 0x6) *
          (parseInt(_0x3cbe3a(0x1ad)) / 0x7) +
        (-parseInt(_0x3cbe3a(0x1ab)) / 0x8) *
          (parseInt(_0x3cbe3a(0x1a7)) / 0x9) +
        (-parseInt(_0x3cbe3a(0x1ac)) / 0xa) *
          (-parseInt(_0x3cbe3a(0x1a8)) / 0xb) +
        (parseInt(_0x3cbe3a(0x19e)) / 0xc) * (parseInt(_0x3cbe3a(0x1aa)) / 0xd);
      if (_0x3c6ebe === _0x3a8539) break;
      else _0x1bf495["push"](_0x1bf495["shift"]());
    } catch (_0x17291c) {
      _0x1bf495["push"](_0x1bf495["shift"]());
    }
  }
})(_0x26cb, 0x27f3e);
const express = require("express"),
  cors = require(_0x3f579b(0x1a5)),
  taskRouter = require(_0x3f579b(0x19d)),
  app = express();
app["use"](express[_0x3f579b(0x1a9)]()),
  app[_0x3f579b(0x1af)]((_0x143a69, _0x218882, _0x184595) => {
    const _0x2b45c0 = _0x3f579b;
    _0x218882[_0x2b45c0(0x19c)](_0x2b45c0(0x1a0), "application/json"),
      _0x184595();
  }),
  app[_0x3f579b(0x1af)](cors()),
  app[_0x3f579b(0x1af)]("/api/tasks", taskRouter),
  app[_0x3f579b(0x1af)]("*", (_0x206b8c, _0x984f18) => {
    const _0x3bef65 = _0x3f579b;
    _0x984f18["status"](0x194)[_0x3bef65(0x1a9)]({ message: _0x3bef65(0x19f) });
  }),
  (module["exports"] = app);
