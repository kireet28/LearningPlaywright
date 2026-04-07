function createUsers(names, roles) {
    return names.map((name, i) => {
        const username = name.toLowerCase().replace(/\s+/g, "_");
        return {
            username,
            email: `${username}@playwrightbatch.com`,
            role: roles[i] ?? "unknown",
        };
    });
}
const names = ["Alice Smith", "Bob Jones", "Charlie Brown", "Diana Prince"];
const roles = ["admin", "editor", "viewer"];

console.log(createUsers(names, roles));