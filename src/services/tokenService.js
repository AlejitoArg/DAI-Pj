import jwt from "jsonwebtoken";
import 'dotenv/config'

export class TokenService {
  getToken = async () => {
    console.log('This is a function on the service')
    const getRandomString = () => {
    var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < 18; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    };

    const getSignedToken = () => {
      const userId = getRandomString();
      const userMail = `${userId}@example.com`;
      const token = "Token: " + jwt.sign(
        {
          payload: "custom payload",
          userEmail: userMail,
        },
        process.env.AUTH_HS256_KEY,
        {
          issuer: process.env.ISSUER,
          subject: userId,
          audience: ["http://localhost/"],
          expiresIn: 60 * 24 * 24,
        },
        
      );
      console.log(token)
      return token;
    };
    return getSignedToken();
  }
}