import CryptoJS from 'crypto-js';

const PASSWORD_LENGTH = 8;
const URL_REGEXP = /^(?:http|https|ftp|chrome):\/\/(?:[\/]*?@)?(.[^/]+)/;
const DOMAIN_REGEXP = /([^.]+.(?:info|co.uk|com|net|org|tv|gov|biz|us|cc|mobi|jp|ca|dk|co.il|io))$/;

function generatePassword(master, url) {
  const domain = getDomain(url);

  const mergedPassword = master + ':' + domain;

  const sha = CryptoJS.SHA1(mergedPassword);
  const digest = sha.toString(CryptoJS.enc.Base64);

  return digest.substr(0, PASSWORD_LENGTH) + '1a!';
}

function getDomain(url) {
  const parsedUrl = url.match(URL_REGEXP);
  if (!parsedUrl) return url;

  const fullDomain = parsedUrl[1];
  const parsedDomain = fullDomain.match(DOMAIN_REGEXP);
  if (parsedDomain) {
    return parsedDomain[1];
  } else {
    return fullDomain;
  }
}

export default generatePassword;
