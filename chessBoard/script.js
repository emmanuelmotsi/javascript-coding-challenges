function init() {
    // Select to start with # or space
    // and create string.
    function startHushSpace(bool) {
        let str = '';
        for (let i = 0; i < 8; i++) {
            if (bool) {
                str = str.concat('#');
                bool = false;
            } else {
                str = str.concat(' ');
                bool = true;
            }
        }
        return str;
    }
    // loop over the function and log 
    // each string returned by line.
    var trueFalse = true
    for (let i = 0; i < 8; i++) {
        let str = startHushSpace(trueFalse);
        trueFalse = trueFalse ? false : true;
        console.log(str);
    }
}
window.onload = init;