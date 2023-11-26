const dns = require('dns');

function isValidUrlWithDnsCheck(inputUrl) {

    const urlRegex = /^(http|https)(:\/\/)/
    const urlRegexTest = urlRegex.test(inputUrl)
    if(!urlRegexTest){
        return false
    }
    const url = inputUrl.replace(urlRegex,"")
    dns.lookup(url, (err, address, family) => {
        if(err){
            return false
        }
    });
    return true

}

module.exports = isValidUrlWithDnsCheck