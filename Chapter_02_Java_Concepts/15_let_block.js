let a = "Kireet";

if (true) {
    console.log(a); //local varaible , TDZ
    let a = "temp";
    console.log(a);
}