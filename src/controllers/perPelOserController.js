import { Router } from 'express';
import { PerPelOserService } from '../services/PerpelOserService.js';
import { Authenticate } from '../common/jwt.strategy.js'

const router = Router();
const perPelOserService = new PerPelOserService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  const perPelOsers = await perPelOserService.getPerPelOser();
  return res.status(200).json(perPelOsers);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const perPelOser = await perPelOserService.getPerPelOserById(req.params.id);

  return res.status(200).json(perPelOser);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  const perPelOser = await perPelOserService.createPerPelOser(req.body);

  return res.status(201).json(perPelOser);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const perPelOser = await perPelOserService.updatePerPelOserById(req.params.id, req.body);

  return res.status(200).json(perPelOser);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const perPelOser = await perPelOserService.deletePerPelOserById(req.params.id);

  return res.status(200).json(perPelOser);
});

export default router;