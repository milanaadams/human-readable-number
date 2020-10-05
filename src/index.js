module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    const stringNumber = String(number);
    
    let oneDigit  = (num) => {
    return ones[num];
    };
    
    let twoDigits  = (num) => {
        if (num[0] === '1'){
            return teens[num % 10];
          } else if (num[1] === '0') {
            return tens[num[0]];
          } else if (num[0] === '0') {
            return oneDigit(num[1]);
          } else {
            return `${tens[num[0]]} ${oneDigit(num[1])}`;
          }
    };
    
    let hundreds = (num) => {
      if (num % 100 === 0){
        return `${oneDigit(num[0])} hundred`;
      } else {
        return `${oneDigit(num[0])} hundred ${twoDigits(num.substr(1))}`;
      }
    };
    
    let thousands = (num) => {
      if (num % 1000 === 0){
        return `${oneDigit(num[0])} thousand`;
      } else {
        return `${oneDigit(num[0])} thousand ${hundreds(num.substr(1))}`;
      }
    }
    
    let tenThousands = (num) => {
      if (num % 10000 === 0){
        return `${twoDigits(num.substr(0, 2))} thousand`;
      } else {
        return `${twoDigits(num.substr(0, 2))} thousand ${hundreds(num.substr(2))}`;
      }
    }
    
    let numberLength = stringNumber.length;
    
    switch (numberLength){
      case 1:
        return oneDigit(stringNumber);
      case 2: 
        return twoDigits(stringNumber);
      case 3:
        return hundreds(stringNumber);  
      case 4:
        return thousands(stringNumber);
      case 5:
        return tenThousands(stringNumber);
    }
}
