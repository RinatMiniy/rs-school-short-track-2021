/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  while (email.indexOf('@') !== -1) {
    // eslint-disable-next-line
    email = email.slice(email.indexOf('@') + 1, email.length);
  }
  return email;
}

module.exports = getEmailDomain;
