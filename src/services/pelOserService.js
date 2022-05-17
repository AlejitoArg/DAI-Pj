import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const pelOserTabla = process.env.DB_TABLA_PELOSER

export class PelOserService {

    getPelOser= async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${pelOserTabla}`);
        console.log(response)

        return response.recordset;
    }

    getPelOserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${pelOserTabla} where IDpelOser = @id`);
        console.log(response)

        return response.recordset[0];
    }

    createPelOser = async (pelOser) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, pelOser?.ID ?? Math.floor(Math.random()*1000000))
            .input('Titulo',sql.VarChar, pelOser?.Titulo ?? '')
            .input('Imagen',sql.VarChar, pelOser?.Imagen ?? '')
            .input('FechaCreacion',sql.VarChar, pelOser?.FechaCreacion ?? '')
            .input('Calificacion',sql.VarChar, pelOser?.Calificacion ?? '')
            .query(`INSERT INTO ${pelOserTabla}(IDpelOser, Titulo, Imagen, FechaCreacion, Calificacion) VALUES (@id, @Titulo, @Imagen, @FechaCreacion, @Calificacion)`);
        console.log(response)

        return response.recordset;
    }

    updatePelOserById = async (id, pelOser) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('Titulo',sql.VarChar, pelOser?.nombre ?? '')
            .input('Imagen',sql.VarChar, pelOser?.imagen ?? '')
            .input('FechaCreacion',sql.VarChar, pelOser?.edad ?? '')
            .input('Calificacion',sql.VarChar, pelOser?.peso ?? '')
            .query(`UPDATE PelOser SET IDpelOser=@id, Titulo = @Titulo, Imagen = @Imagen, FechaCreacion = @FechaCreacion, Calificacion = @Calificacion WHERE IDpelOser = @Id`);
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