const ipToNum = (ip = "127.0.0.1") => {
    const def = (res, index) => (res << 8) + index;
    return ip.split(".").map((index) => Number(index)).reduce(def, 0);
};
// console.log(ipToNum());