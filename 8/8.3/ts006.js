function echo(msg) {
    if (typeof msg === "string") {
        console.log(msg.length);
    }
    if (typeof msg === "number") {
        console.log(msg.toFixed(2));
    }
    return msg;
}
echo(222);
echo("222");
