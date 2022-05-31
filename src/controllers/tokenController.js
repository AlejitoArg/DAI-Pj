import { Router } from 'express';
import { TokenService } from '../services/tokenService.js';

const router = Router();
const tokenService = new TokenService();

router.get('/:token', async (req, res) => {
    console.log(`Request URL Param: ${req.params.token}`);
    console.log(`This is a get operation`);
  
    const token = await tokenService.getToken(req.params.token);
  
    return res.status(200).json(token);
  });

  export default router;