import { Router } from 'express';
import { TokenService } from "../services/tokenService.js";
import "dotenv/config";

const router = Router();
const tokenService = new TokenService();

router.get('', async (req, res) => {
    console.log(`This is a get operation`);

    const token = await tokenService.getToken();
    console.log(`This ` + token);
    
    return res.status(200).json(token);
});
export default router;