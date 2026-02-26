const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}
console.log(encryptedName);
// question 1 What advantage does using a loop provide over manually encrypting each letter?
// answer: Using a loop provides automation, enabling us to process each letter of the name consecutively without redundant code. It ensures consistent encryption and can easily adapt to names of any length.
// question 2 What is the role of the modulus operator in the encryption process?
// Answer: The modulus operator, %, ensures that if the sum of the current index and the shift value surpasses the alphabet's length, it wraps around to the start. Thus, after "z", we return to "a", guaranteeing continuous encryption.
