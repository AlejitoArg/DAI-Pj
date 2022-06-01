import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const pelOserTabla = process.env.DB_TABLA_PELOSER
const perPelOserTabla = process.env.DB_TABLA_PERPELOSER

export class PelOserService {

    getPelOser= async (des) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        console.log(pelOserTabla)
        const response = await pool.request().query(`SELECT IDpelOser, Titulo, Imagen, FechaCreacion from ${pelOserTabla}`);
        console.log(response)
        if(des="DESC")return response.recordset.reverse();
        return response.recordset;
    }

    getPelOserByParameter= async (Titulo) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT IDpelOser, Titulo, Imagen, FechaCreacion from ${pelOserTabla} where Titulo='${Titulo}'`);
        
        return response.recordset;
    }

    getPelOserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${pelOserTabla} where IDpelOser = @id`);
        console.log(response)
        const response2 = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT Personajes.IDpersonaje from ${perPelOserTabla} INNER JOIN PelOser ON PerPelOser.IDpelOser = PelOser.IDpelOser INNER JOIN Personajes ON PerPelOser.IDpersonaje = Personajes.IDpersonaje WHERE PelOser.IDpelOser=@id`);
        response.recordset[0].Personajes = response2.recordset
            return response.recordset[0];
    }

    createPelOser = async (pelOser) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Titulo',sql.VarChar, pelOser?.Titulo ?? '')
            .input('Imagen',sql.VarChar, pelOser?.Imagen ?? '')
            .input('FechaCreacion',sql.VarChar, pelOser?.FechaCreacion ?? '')
            .input('Calificacion',sql.VarChar, pelOser?.Calificacion ?? '')
            .query(`INSERT INTO ${pelOserTabla}(Titulo, Imagen, FechaCreacion, Calificacion) VALUES (@Titulo, @Imagen, @FechaCreacion, @Calificacion)`);
        console.log(response)

        return response.recordset;
    }

    updatePelOserById = async (id, pelOser) => {
        console.log('This is a function on the service');
        console.log(id)
        console.log(pelOser)
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('Titulo',sql.VarChar, pelOser?.Imagen ?? '')
            .input('Imagen',sql.VarChar, pelOser?.Titulo ?? '')
            .input('FechaCreacion',sql.VarChar, pelOser?.FechaCreacion ?? '')
            .input('Calificacion',sql.VarChar, pelOser?.Calificacion ?? '')
            .query(`UPDATE PelOser SET Titulo = @Titulo, Imagen = @Imagen, FechaCreacion = @FechaCreacion, Calificacion = @Calificacion WHERE IDpelOser = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePelOserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${pelOserTabla} WHERE IDpelOser = @id`);
        console.log(response)

        return response.recordset;
    }
}