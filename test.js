const totalPrice = (discount) => (amount) => {
    return amount - discount * amount
}

const withDiscount = totalPrice(.3)

console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(240));