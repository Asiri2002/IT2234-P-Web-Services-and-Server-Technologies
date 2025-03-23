//multwo
const myarr = (mul, ...n) => {
    n.forEach((i) => console.log(mul(i)));
};
myarr(multow,4,5,6,7,2);