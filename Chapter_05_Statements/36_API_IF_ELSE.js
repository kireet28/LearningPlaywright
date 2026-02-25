let isStatuscode = 403;

if (isStatuscode === 200) {
    console.log("OK");
} else if (isStatuscode === 404) {
    console.log("Not Found");
} else if (isStatuscode === 500) {
    console.log("500 server error");
} else {
    console.log("Unknown Status Code");
}
