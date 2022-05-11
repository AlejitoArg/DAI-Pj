import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE

export class PersonajeService {

    getPersonaje= async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${personajeTabla}`);
        console.log(response)

        return response.recordset;
    }

    getPersonajeByNameAndAge = async (Nombre, Edad) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Nombre',sql.VarChar, Nombre)
            .input('Edad',sql.VarChar, Edad)
            .query(`SELECT * from ${personajeTabla} where Nombre = @nombre and Edad = @Edad`);
        console.log(response)

        return response.recordset[0];
    }

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${personajeTabla} where IDpersonaje = @id`);
        console.log(response)

        return response.recordset[0];
    }

    createPersonaje = async (personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, personaje?.ID ?? 0)
            .input('Nombre',sql.VarChar, personaje?.Nombre ?? '')
            .input('Imagen',sql.VarChar, personaje?.Imagen ?? '')
            .input('Edad',sql.VarChar, personaje?.Edad ?? '')
            .input('Peso',sql.VarChar, personaje?.Peso ?? '')
            .input('Historia',sql.VarChar, personaje?.Historia ?? '')
            .query(`INSERT INTO ${personajeTabla}(IDpersonaje, Nombre, Imagen, Edad, Peso, Historia) VALUES (@id, @Nombre, @Imagen, @Edad, @Peso, @Historia)`);
        console.log(response)

        return response.recordset;
    }

    updatePerosnajeById = async (id, personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('Nombre',sql.VarChar, personaje?.nombre ?? '')
            .input('Imagen',sql.VarChar, personaje?.imagen ?? '')
            .input('Edad',sql.VarChar, personaje?.edad ?? '')
            .input('Peso',sql.VarChar, personaje?.peso ?? '')
            .input('Historia',sql.VarChar, personaje?.historia ?? '')
            .query(`UPDATE Personajes SET IDpersonaje=@id, Nombre = @Nombre, Imagen = @Imagen, Edad = @Edad, Peso = @Peso, Historia = @Historia WHERE id = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${personajeTabla} WHERE IDpersonaje = @id`);
        console.log(response)

        return response.recordset;
    }
}