module.exports = function check(str, bracketsConfig) {
    const symbolRegExp = /\W/;
    const regExpStrBrackets = bracketsConfig.reduce((arrayBrackets, [open, close]) => {
        let regExpBracket = '';
        if (symbolRegExp.test(open)) {
            regExpBracket += '\\';
        }
        regExpBracket += open;
        if (symbolRegExp.test(open)) {
            regExpBracket += '\\';
        }
        regExpBracket += close;

        arrayBrackets.push(regExpBracket);

        return arrayBrackets;
    }, []).join('|');

    let regExpBrackets = RegExp(regExpStrBrackets,'g');

    let strBrackets = str;

    while (regExpBrackets.test(strBrackets)) {
        strBrackets = strBrackets.replace(regExpBrackets, '')
    }

    if (strBrackets.length) {
        return false
    }

    return true;
}
