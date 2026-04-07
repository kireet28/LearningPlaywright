// Callback

function placeOrder(item, callback) {
    console.log("Placing order");
    callback(); // function call
}

// Define
function print() {
    console.log("Normal Fn - Done with the order");
}

// First Way
// placeOrder("Burger", print);

// Second Way Anonymous
placeOrder("Burger", function () {
    console.log("Anonymous Fn, I am also a function without name!")
});

// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function without name!")
});

function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});