"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"));
var import_path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));
var app = (0, import_express.default)();
var PORT = process.env.PORT || 3e3;
var distPath = import_path.default.join(process.cwd(), "dist");
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});
app.use("/_next", import_express.default.static(import_path.default.join(distPath, "_next"), {
  maxAge: "1y",
  immutable: true
}));
app.use(import_express.default.static(distPath, {
  index: false,
  maxAge: "1h"
}));
app.use((req, res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("X-LiteSpeed-Cache-Control", "no-cache");
  res.setHeader("Pragma", "no-cache");
  const pathname = req.path.replace(/\/$/, "") || "/";
  const exact = import_path.default.join(distPath, pathname + ".html");
  if (import_fs.default.existsSync(exact)) return res.sendFile(exact);
  const dirIndex = import_path.default.join(distPath, pathname, "index.html");
  if (import_fs.default.existsSync(dirIndex)) return res.sendFile(dirIndex);
  const root = import_path.default.join(distPath, "index.html");
  if (import_fs.default.existsSync(root)) return res.sendFile(root);
  res.status(404).send("Not Found");
});
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Colmed ready on port ${PORT}`);
});
