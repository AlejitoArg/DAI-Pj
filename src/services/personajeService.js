import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE
const perPelOserTabla = process.env.DB_TABLA_PERPELOSER
const PelOserTabla = process.env.DB_TABLA_PELOSER

export class PersonajeService {

    getPersonaje= async () => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT IDpersonaje, Nombre, Imagen from ${personajeTabla}`);
        console.log(response)

        return response.recordset;
    }

    getPersonajeByParameter = async (Nombre, Edad, IDpelOser) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let q;
        if(IDpelOser){
            console.log("IDpelOser:" + IDpelOser)
            q=`SELECT ${personajeTabla}.IDpersonaje, ${personajeTabla}.Nombre, ${personajeTabla}.Imagen, ${PelOserTabla}.IDpelOser from ${personajeTabla} INNER JOIN ${perPelOserTabla} ON ${perPelOserTabla}.IDpersonaje = ${personajeTabla}.IDpersonaje INNER JOIN ${PelOserTabla} ON ${perPelOserTabla}.IDpelOser = ${PelOserTabla}.IDpelOser WHERE ${PelOserTabla}.IDpelOser=${IDpelOser}`;
        }else if(Nombre){
            console.log("Nombre:" + Nombre)
            q=`select Personajes.IDpersonaje, Personajes.Nombre, Personajes.Imagen from ${personajeTabla} where Nombre='${Nombre}'`;
        }else{
            console.log("Edad:" + Edad)
            q=`select Personajes.IDpersonaje, Personajes.Nombre, Personajes.Imagen from ${personajeTabla} where Edad='${Edad}'`;
        }
        const response = await pool.request()
            .query(q);
        console.log(response)

        return response.recordset;
    }

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${personajeTabla} where IDpersonaje = @id`);
        console.log(response)
        const response2 = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT PelOser.IDpelOser from ${perPelOserTabla} INNER JOIN Personajes ON PerPelOser.IDpersonaje = Personajes.IDpersonaje INNER JOIN PelOser ON PerPelOser.IDpelOser = PelOser.IDpelOser WHERE Personajes.IDpersonaje=@id`);
        response.recordset[0].PelOsers = response2.recordset
        return response.recordset[0];
    }

    createPersonaje = async (personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Nombre',sql.VarChar, personaje?.Nombre ?? '')
            .input('Imagen',sql.VarChar, personaje?.Imagen ?? '')
            .input('Edad',sql.VarChar, personaje?.Edad ?? '')
            .input('Peso',sql.VarChar, personaje?.Peso ?? '')
            .input('Historia',sql.VarChar, personaje?.Historia ?? '')
            .query(`INSERT INTO ${personajeTabla}(Nombre, Imagen, Edad, Peso, Historia) VALUES (@Nombre, @Imagen, @Edad, @Peso, @Historia)`);
        console.log(response)

        return response.recordset;
    }

    updatePerosnajeById = async (id, personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('Nombre',sql.VarChar, personaje?.Nombre ?? '')
            .input('Imagen',sql.VarChar, personaje?.Imagen ?? '')
            .input('Edad',sql.VarChar, personaje?.Edad ?? '')
            .input('Peso',sql.VarChar, personaje?.Peso ?? '')
            .input('Historia',sql.VarChar, personaje?.Historia ?? '')
            .query(`UPDATE Personajes SET Nombre = @Nombre, Imagen = @Imagen, Edad = @Edad, Peso = @Peso, Historia = @Historia WHERE IDpersonaje = @Id`);
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