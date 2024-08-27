function generateOTP(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
  }
  return otp;
}

let otp = generateOTP(6); // Generate a 6-digit OTP
console.log(otp);
