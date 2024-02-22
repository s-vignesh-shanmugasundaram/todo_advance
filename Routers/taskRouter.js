const _0xc993a5 = _0x47f5;
(function (_0x4948d7, _0x57b0a2) {
  const _0x61a54e = _0x47f5,
    _0x17a5de = _0x4948d7();
  while (!![]) {
    try {
      const _0x46f19c =
        -parseInt(_0x61a54e(0xe6)) / 0x1 +
        (parseInt(_0x61a54e(0xd6)) / 0x2) * (-parseInt(_0x61a54e(0xdf)) / 0x3) +
        (parseInt(_0x61a54e(0xd9)) / 0x4) * (parseInt(_0x61a54e(0xe7)) / 0x5) +
        (-parseInt(_0x61a54e(0xe3)) / 0x6) *
          (-parseInt(_0x61a54e(0xe8)) / 0x7) +
        -parseInt(_0x61a54e(0xe1)) / 0x8 +
        -parseInt(_0x61a54e(0xe0)) / 0x9 +
        (parseInt(_0x61a54e(0xeb)) / 0xa) * (parseInt(_0x61a54e(0xe4)) / 0xb);
      if (_0x46f19c === _0x57b0a2) break;
      else _0x17a5de["push"](_0x17a5de["shift"]());
    } catch (_0x47703b) {
      _0x17a5de["push"](_0x17a5de["shift"]());
    }
  }
})(_0x5a41, 0xbd61d);
function _0x47f5(_0x5ecabf, _0x315742) {
  const _0x5a41fb = _0x5a41();
  return (
    (_0x47f5 = function (_0x47f547, _0x13e775) {
      _0x47f547 = _0x47f547 - 0xd4;
      let _0x1df054 = _0x5a41fb[_0x47f547];
      return _0x1df054;
    }),
    _0x47f5(_0x5ecabf, _0x315742)
  );
}
const express = require(_0xc993a5(0xe2)),
  taskController = require(_0xc993a5(0xd4)),
  router = express["Router"]();
function _0x5a41() {
  const _0x80853b = [
    "1546351lhKTeW",
    "5EQQVZX",
    "7301553diplER",
    "updateTask",
    "/:id",
    "818220RjKryh",
    "exports",
    "../Controller/taskController.js",
    "patch",
    "10zXZVfX",
    "/filter/:status",
    "getOneTask",
    "1844540wQXbpU",
    "getAllTasks",
    "delete",
    "route",
    "createTask",
    "get",
    "33009fnCcLJ",
    "3903714rjTGfA",
    "11802728AeTSCC",
    "express",
    "6pkkZCa",
    "374nFRzBs",
    "post",
  ];
  _0x5a41 = function () {
    return _0x80853b;
  };
  return _0x5a41();
}
router["route"]("/")
  ["get"](taskController[_0xc993a5(0xda)])
  [_0xc993a5(0xe5)](taskController[_0xc993a5(0xdd)]),
  router[_0xc993a5(0xdc)](_0xc993a5(0xd7))[_0xc993a5(0xde)](
    taskController["filterTask"]
  ),
  router[_0xc993a5(0xdc)](_0xc993a5(0xea))
    [_0xc993a5(0xde)](taskController[_0xc993a5(0xd8)])
    [_0xc993a5(0xd5)](taskController[_0xc993a5(0xe9)])
    [_0xc993a5(0xdb)](taskController["deleteTask"]),
  (module[_0xc993a5(0xec)] = router);
