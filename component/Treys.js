import { View, Text } from 'react-native'
import React from 'react'
import CryptoES from "crypto-es";

export default function Treys() {
    

    var mytexttoEncryption = "Hello" 
    const encrypted = CryptoES.AES.encrypt(mytexttoEncryption ,"kunj").toString();
    console.log(encrypted)
    var Decrypted = CryptoES.AES.decrypt(encrypted, "kunj");
var result =Decrypted.toString(CryptoES.enc.Utf8);
console.log(result)
  return (
    <View>
      <Text>Treys</Text>
    </View>
  )
}

