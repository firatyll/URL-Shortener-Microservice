const dns = require('dns');

function isValidUrlWithDnsCheck(inputUrl) {
    dns.lookup(inputUrl , function(err){
        if(err){
            return false
        }
    })
    return true
}

module.exports = isValidUrlWithDnsCheck