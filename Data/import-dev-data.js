const _0x5806ff = _0x1569;
(function (_0x27771d, _0x50cb00) {
  const _0x241023 = _0x1569,
    _0x404340 = _0x27771d();
  while (!![]) {
    try {
      const _0x58ef95 =
        (parseInt(_0x241023(0xd1)) / 0x1) * (-parseInt(_0x241023(0xdc)) / 0x2) +
        (parseInt(_0x241023(0xcd)) / 0x3) * (parseInt(_0x241023(0xd3)) / 0x4) +
        (parseInt(_0x241023(0xdf)) / 0x5) * (-parseInt(_0x241023(0xda)) / 0x6) +
        (parseInt(_0x241023(0xcf)) / 0x7) * (-parseInt(_0x241023(0xd7)) / 0x8) +
        -parseInt(_0x241023(0xcb)) / 0x9 +
        (-parseInt(_0x241023(0xd9)) / 0xa) * (parseInt(_0x241023(0xe3)) / 0xb) +
        parseInt(_0x241023(0xdb)) / 0xc;
      if (_0x58ef95 === _0x50cb00) break;
      else _0x404340["push"](_0x404340["shift"]());
    } catch (_0x11ce67) {
      _0x404340["push"](_0x404340["shift"]());
    }
  }
})(_0x5c6f, 0x8123a);
const fs = require("fs"),
  Task = require(_0x5806ff(0xe0)),
  mongoose = require("mongoose"),
  DB = _0x5806ff(0xd4);
mongoose[_0x5806ff(0xd8)](DB)[_0x5806ff(0xcc)](() =>
  console[_0x5806ff(0xd2)](_0x5806ff(0xe1))
);
function _0x1569(_0x2729a1, _0x51a2c5) {
  const _0x5c6fe9 = _0x5c6f();
  return (
    (_0x1569 = function (_0x156934, _0x582d1c) {
      _0x156934 = _0x156934 - 0xcb;
      let _0x498460 = _0x5c6fe9[_0x156934];
      return _0x498460;
    }),
    _0x1569(_0x2729a1, _0x51a2c5)
  );
}
const tasks = JSON[_0x5806ff(0xdd)](
    fs[_0x5806ff(0xe4)](__dirname + _0x5806ff(0xd0), "utf-8")
  ),
  importData = async () => {
    const _0x339271 = _0x5806ff;
    try {
      await Task["create"](tasks), console[_0x339271(0xd2)](_0x339271(0xe2));
    } catch (_0x124155) {
      console[_0x339271(0xd2)](_0x124155);
    }
    process["exit"]();
  },
  deleteData = async () => {
    const _0x5242e0 = _0x5806ff;
    try {
      await Task[_0x5242e0(0xde)](), console[_0x5242e0(0xd2)](_0x5242e0(0xd5));
    } catch (_0x2aa2f6) {
      console[_0x5242e0(0xd2)](_0x2aa2f6);
    }
    process["exit"]();
  };
if (process[_0x5806ff(0xce)][0x2] === "--import") importData();
else process[_0x5806ff(0xce)][0x2] === _0x5806ff(0xd6) && deleteData();
function _0x5c6f() {
  const _0x509e2c = [
    "/Sample-data.json",
    "557539aokYft",
    "log",
    "128STStXt",
    "mongodb+srv://taskProject:1234567890@task.5doedsw.mongodb.net/",
    "Data\x20successfully\x20deleted!",
    "--delete",
    "39344Nizfbd",
    "connect",
    "10MMwyXy",
    "9924JkwotN",
    "38611416tbEEdS",
    "2CpyTqT",
    "parse",
    "deleteMany",
    "565vAxbPv",
    "../Modal/taskModel.js",
    "DB1\x20connection\x20successful!",
    "Data\x20successfully\x20loaded!",
    "9982313lZPnrj",
    "readFileSync",
    "7768170xaqbvw",
    "then",
    "20148JpBMKO",
    "argv",
    "553Nfczsy",
  ];
  _0x5c6f = function () {
    return _0x509e2c;
  };
  return _0x5c6f();
}
