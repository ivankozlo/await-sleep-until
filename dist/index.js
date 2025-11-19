"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
function sleepFor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function sleepUntil(condition, options = {}) {
    var _a, _b;
    const interval = (_a = options.interval) !== null && _a !== void 0 ? _a : 100;
    const timeout = (_b = options.timeout) !== null && _b !== void 0 ? _b : Infinity;
    const start = Date.now();
    while (true) {
        if (await condition())
            return;
        if (Date.now() - start >= timeout) {
            throw new Error("sleep.until: timeout exceeded");
        }
        await sleepFor(interval);
    }
}
async function sleepAt(time) {
    const target = typeof time === "string" ? new Date(time) : time;
    const now = Date.now();
    const diff = target.getTime() - now;
    if (diff <= 0)
        return; // time already passed
    await sleepFor(diff);
}
exports.sleep = {
    for: sleepFor,
    until: sleepUntil,
    at: sleepAt,
};
exports.default = exports.sleep;
