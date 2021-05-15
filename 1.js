var text = "100";
var text2;
text2 = parseInt(text) + 100;
console.log(text + text2);
var hocvien = ["sac", "ads", "ewre"];
console.log(hocvien[2]);
for (var i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}
// enum
var Status;
(function (Status) {
    Status[Status["start"] = 10] = "start";
    Status[Status["working"] = 100] = "working";
    Status[Status["done"] = 101] = "done";
})(Status || (Status = {}));
console.log(Status);
console.log(Status[0]);
console.log(Status["done"]);
// tuple
var tuple = ["string", 1, "string1"];
console.log("🚀 ~ file: 1.ts ~ line 27 ~ tuple", tuple);
// any
var x = {
    name: 'name',
    age: 13
};
console.log("🚀 ~ file: 1.ts ~ line 30 ~ x", typeof x, x);
// void
function consolelog() {
    console.log('this is type void');
}
consolelog();
// ep kieu
var kieu1 = 100;
console.log("🚀 ~ file: 1.ts ~ line 45 ~ kieu1", kieu1.length);
var a = 100;
var b = 10;
console.log(b.toString() + a);
