let message;
function checkForSpam(message) {
    const spam1 = 'spAm';
    const spam2 = 'sALe';
    const spam1Reg = spam1.toUpperCase();
    const spam2Reg = spam2.toUpperCase();
    const messageReg = message.toUpperCase();

    if (messageReg.includes(spam1Reg) || messageReg.includes(spam2Reg)) {
        return true;
    } else return false;
}  

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
