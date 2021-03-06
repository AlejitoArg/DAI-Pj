import { Router } from 'express';
import { PelOserService } from '../services/pelOserService.js';
import { Authenticate } from '../common/jwt.strategy.js'

const router = Router();
const pelOserService = new PelOserService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  const titulo = req.query.titulo;
  const des = req.query.des;
  let pelOsers;
  if(titulo){
    pelOsers = await pelOserService.getPelOserByParameter(titulo);
  }else{
    pelOsers = await pelOserService.getPelOser(des);
  }
  return res.status(200).json(pelOsers);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const pelOser = await pelOserService.getPelOserById(req.params.id);

  return res.status(200).json(pelOser);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  const pelOser = await pelOserService.createPelOser(req.body);

  return res.status(201).json(pelOser);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const pelOser = await pelOserService.updatePelOserById(req.params.id, req.body);

  return res.status(200).json(pelOser);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const pelOser = await pelOserService.deletePelOserById(req.params.id);

  return res.status(200).json(pelOser);
});

export default router;