let text: string = "100";
let text2: Number;

text2 = parseInt(text) + 100;

console.log(text + text2);

var hocvien: string[] = ["sac", "ads", "ewre"];
console.log(hocvien[2]);

for (var i = 0; i < hocvien.length; i++) {
  console.log(hocvien[i]);
}

// enum
enum Status {
  start = 10,
  working = 100,
  done,
}
console.log(Status);
console.log(Status[0]);
console.log(Status["done"]);

// tuple
var tuple: [string, number, string] = ["string", 1, "string1"];
console.log("🚀 ~ file: 1.ts ~ line 27 ~ tuple", tuple);

// any
var x: any = {
    name: 'name',
    age: 13,
};
console.log("🚀 ~ file: 1.ts ~ line 30 ~ x", typeof x, x);

// void
function consolelog():void {
    console.log('this is type void');
}

consolelog()

// ep kieu
let kieu1 : any = 100
console.log("🚀 ~ file: 1.ts ~ line 45 ~ kieu1", (kieu1 as string).length)

let a = 100
let b = 10
console.log(b.toString() + a);
