const crypto = require('crypto');

function anotherInsecurePassword() {
  // Use cryptographically secure randomness for password generation
  var suffix = crypto.randomInt(0x100000000);
  var password = "sssAAAA" + suffix;
  return password;
}