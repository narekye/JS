var user = {};
user.name = "Booba";
// descriptor
Object.defineProperty(user, name, { value: "Booba", configurable: true, writable: true, enumerable: true });
// lines 2 & 4 are equivalent.