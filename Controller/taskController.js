const _0xad6f4c = _0x4eab;
function _0x4eab(_0x2a7b29, _0x465dc9) {
  const _0x4f2950 = _0x4f29();
  return (
    (_0x4eab = function (_0x4eabfe, _0x3730e2) {
      _0x4eabfe = _0x4eabfe - 0xf6;
      let _0x35126f = _0x4f2950[_0x4eabfe];
      return _0x35126f;
    }),
    _0x4eab(_0x2a7b29, _0x465dc9)
  );
}
(function (_0x27b30d, _0x169524) {
  const _0x1f8341 = _0x4eab,
    _0x58e7c9 = _0x27b30d();
  while (!![]) {
    try {
      const _0x49a794 =
        parseInt(_0x1f8341(0x119)) / 0x1 +
        (parseInt(_0x1f8341(0x120)) / 0x2) *
          (-parseInt(_0x1f8341(0xff)) / 0x3) +
        (parseInt(_0x1f8341(0x117)) / 0x4) *
          (parseInt(_0x1f8341(0x101)) / 0x5) +
        (-parseInt(_0x1f8341(0x110)) / 0x6) *
          (parseInt(_0x1f8341(0xfa)) / 0x7) +
        -parseInt(_0x1f8341(0x107)) / 0x8 +
        (-parseInt(_0x1f8341(0x100)) / 0x9) *
          (parseInt(_0x1f8341(0x10d)) / 0xa) +
        (parseInt(_0x1f8341(0x123)) / 0xb) * (parseInt(_0x1f8341(0x10e)) / 0xc);
      if (_0x49a794 === _0x169524) break;
      else _0x58e7c9["push"](_0x58e7c9["shift"]());
    } catch (_0x57c399) {
      _0x58e7c9["push"](_0x58e7c9["shift"]());
    }
  }
})(_0x4f29, 0xbd1bf);
const task = require(_0xad6f4c(0x11c));
class AppError extends Error {
  constructor(_0x5974fe, _0x32672b) {
    const _0x8e26b9 = _0xad6f4c;
    super(_0x5974fe),
      (this[_0x8e26b9(0x118)] = _0x32672b),
      (this[_0x8e26b9(0x10a)] = ("" + _0x32672b)[_0x8e26b9(0x104)](0x4)
        ? _0x8e26b9(0x121)
        : "Error\x20!"),
      (this[_0x8e26b9(0x115)] = !![]),
      Error[_0x8e26b9(0xf8)](this, this[_0x8e26b9(0x10f)]);
  }
}
function _0x4f29() {
  const _0x4e0091 = [
    "getOneTask",
    "Task\x20Created\x20successfully\x20",
    "No\x20Tasks",
    "taskStatus",
    "146361HLMdCP",
    "603cxklvv",
    "190bxpNCD",
    "body",
    "json",
    "startsWith",
    "createTask",
    "includes",
    "10266392YynNGx",
    "values",
    "getAllTasks",
    "status",
    "findByIdAndDelete",
    "split",
    "189990kxtCGQ",
    "1182972dotyxs",
    "constructor",
    "426534TVtTfw",
    "findByIdAndUpdate",
    "log",
    "updateTask",
    "findById",
    "isOperational",
    "deleteTask",
    "134072aixYyp",
    "statusCode",
    "721827qdIzJX",
    "Data\x20for\x20single\x20Task",
    "length",
    "../Modal/taskModel",
    "keys",
    "find",
    "Success",
    "10UAhojw",
    "Faild..!",
    "create",
    "319HUOQfv",
    "title",
    "No\x20document\x20found\x20in\x20this\x20ID..!",
    "captureStackTrace",
    "params",
    "126GpNhYf",
  ];
  _0x4f29 = function () {
    return _0x4e0091;
  };
  return _0x4f29();
}
(exports[_0xad6f4c(0x109)] = async (_0xd41d12, _0x4ce4bb, _0x295d26) => {
  const _0x408170 = _0xad6f4c;
  let _0x2ed273 = { ..._0xd41d12["query"] };
  Object["keys"](_0x2ed273)[0x0] === _0x408170(0xf6) &&
    (_0x2ed273 = {
      title: {
        $regex: new RegExp(Object[_0x408170(0x108)](_0x2ed273)[0x0]),
        $options: "i",
      },
    });
  if (Object[_0x408170(0x11d)](_0x2ed273)[0x0] === _0x408170(0xfe)) {
    const _0x4d081c = Object[_0x408170(0x108)](_0x2ed273)[0x0]["split"](",");
    !_0x4d081c[_0x408170(0x106)]("")
      ? (_0x2ed273 = { taskStatus: { $in: _0x4d081c } })
      : (_0x2ed273 = {});
  }
  const _0x34b3ea = await task["find"](_0x2ed273);
  if (!task) return _0x295d26(new AppError(_0x408170(0xfd), 0xcc));
  _0x4ce4bb["status"](0xc8)[_0x408170(0x103)]({
    status: "Success",
    results: _0x34b3ea[_0x408170(0x11b)],
    data: _0x34b3ea,
  });
}),
  (exports[_0xad6f4c(0xfb)] = async (_0x45354c, _0x414f4f, _0x1cf553) => {
    const _0x153ef7 = _0xad6f4c,
      _0x349625 = await task[_0x153ef7(0x114)](
        _0x45354c[_0x153ef7(0xf9)]["id"]
      );
    if (!_0x349625) return _0x1cf553(new AppError(_0x153ef7(0xf7), 0x194));
    _0x414f4f[_0x153ef7(0x10a)](0xc8)[_0x153ef7(0x103)]({
      status: "Success",
      message: _0x153ef7(0x11a),
      data: _0x349625,
    });
  }),
  (exports[_0xad6f4c(0x105)] = async (_0x36e7df, _0x6ff91d) => {
    const _0x1f9929 = _0xad6f4c,
      _0x4e16f7 = await task[_0x1f9929(0x122)](_0x36e7df[_0x1f9929(0x102)]);
    _0x6ff91d["status"](0xc9)[_0x1f9929(0x103)]({
      status: _0x1f9929(0x11f),
      message: _0x1f9929(0xfc),
      data: _0x4e16f7,
    });
  }),
  (exports[_0xad6f4c(0x113)] = async (_0x2feff2, _0x23ed62, _0x481a51) => {
    const _0x2108c0 = _0xad6f4c,
      _0x57ec56 = await task[_0x2108c0(0x111)](
        _0x2feff2[_0x2108c0(0xf9)]["id"],
        _0x2feff2[_0x2108c0(0x102)]
      );
    if (!_0x57ec56)
      return _0x481a51(
        new AppError("No\x20document\x20found\x20in\x20this\x20ID..!", 0x194)
      );
    _0x23ed62[_0x2108c0(0x10a)](0xc9)[_0x2108c0(0x103)]({
      status: _0x2108c0(0x11f),
      data: _0x57ec56,
    });
  }),
  (exports[_0xad6f4c(0x116)] = async (_0x570cb0, _0x505099, _0x35336e) => {
    const _0x342541 = _0xad6f4c,
      _0x38b54e = await task[_0x342541(0x10b)](
        _0x570cb0[_0x342541(0xf9)]["id"]
      );
    if (!_0x38b54e) return _0x35336e(new AppError(_0x342541(0xf7), 0x194));
    _0x505099[_0x342541(0x10a)](0xcc)[_0x342541(0x103)]({
      status: _0x342541(0x11f),
      data: null,
    });
  }),
  (exports["filterTask"] = async (_0x22a8c3, _0x3a9261) => {
    const _0xc0db06 = _0xad6f4c;
    try {
      const _0x5b48a4 =
          _0x22a8c3[_0xc0db06(0xf9)]["status"][_0xc0db06(0x10c)](","),
        _0x5d9b73 = await task[_0xc0db06(0x11e)]({
          taskStatus: { $in: _0x5b48a4 },
        });
      _0x3a9261["status"](0xc9)[_0xc0db06(0x103)]({
        status: _0xc0db06(0x11f),
        length: _0x5d9b73["length"],
        data: _0x5d9b73,
      });
    } catch (_0x296804) {
      console[_0xc0db06(0x112)](_0x296804);
    }
  });
