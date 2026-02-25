let isStatuscode = 500;

switch (isStatuscode) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not found");
        break;
    case 403:
        console.log("forbidden")
        break;
    case 500:
        console.log("500 server error")
        break;

    default:
        console.log("invalid code");
}