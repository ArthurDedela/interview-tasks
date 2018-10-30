

function isPalindrome(s) {
    const cleanStr = s.replace(/[^\wа-яА-Я]/g, '').toLowerCase();
    
    return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = isPalindrome;