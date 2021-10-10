function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("\u53C2\u6570string\u6216number,\u4F46\u4F20\u5165" + padding);
}
console.log(padLeft("Hello world", 3));
console.log(padLeft("Hello world", "____"));
// console.log(padLeft("Hello world",true))
