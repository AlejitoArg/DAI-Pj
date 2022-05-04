import { Router } from 'express';
import { PersonajeService } from '../services/personajeService.js';

const router = Router();
const personajeService = new PersonajeService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);

  const nombre = req.query.Nombre;
  const edad = req.query.Edad;
  let personajes;

  if(nombre=="hola" && edad=="chau"){
    personajes = await personajeService.getPersonajeByNameAndAge();
    console.log("anashe")
  }else{
    personajes = await personajeService.getPersonaje();
    console.log("anashen't")
  }

  return res.status(200).json(personajes);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await personajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await personajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await personajeService.updatePersonajeById(req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await personajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;