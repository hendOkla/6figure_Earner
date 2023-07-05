import CryptoJS from 'crypto-js'

function encryptUrl(videoUrl) {
  const secretKey = 'your-secret-key' // Replace with your own secret key
  const encryptedUrl = CryptoJS.AES.encrypt(videoUrl, secretKey).toString()

  return encryptedUrl
}

export default encryptUrl;