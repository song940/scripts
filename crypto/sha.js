// Utility function to import a crypto key for HMAC
async function importCryptoKey(key, algorithm) {
  return crypto.subtle.importKey('raw', key, {
    name: 'HMAC',
    hash: { name: algorithm },
  }, false, ['sign']);
}

// Utility function to generate a hash
async function generateHash(algorithm, data) {
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  return new Uint8Array(hashBuffer);
}

// Function to generate HMAC signature
export async function generateHMACSignature(algorithm, key, data) {
  const cryptoKey = await importCryptoKey(key, algorithm);
  return crypto.subtle.sign('HMAC', cryptoKey, data);
}

// Function to generate SHA hash
export async function generateSHAHash(algorithm, data) {
  return generateHash(algorithm, data);
}

// Specific SHA hash functions
export const sha1 = data => generateSHAHash('SHA-1', data);
export const sha256 = data => generateSHAHash('SHA-256', data);
export const sha512 = data => generateSHAHash('SHA-512', data);
export const sha1hmac = (key, data) => generateHMACSignature('SHA-1', key, data);
export const sha256hmac = (key, data) => generateHMACSignature('SHA-256', key, data);
export const sha512hmac = (key, data) => generateHMACSignature('SHA-512', key, data);
