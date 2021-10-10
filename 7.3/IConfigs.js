function load(config) {
    console.log(config.name);
}
load({ name: "div", height: 180 });
load({ name: "svg", height: 180, width: 200 });
load({ name: "html", height: 180, width: 200, learn: function () {
        console.log("learning");
    }
});
