import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const perPelOserTabla = process.env.DB_TABLA_PERPELOSER

export class PerPelOserService {

    getPerPelOser= async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${perPelOserTabla}`);
        console.log(response)
        return response.recordset;
    }

    getPerPelOserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${perPelOserTabla} where IDperPelOser = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createPerPelOser = async (pelOser) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('IDpelOser',sql.Int, pelOser?.IDpelOser ?? 1)
            .input('IDpersonaje',sql.Int, pelOser?.IDpersonaje ?? 1)
            .query(`INSERT INTO ${perPelOserTabla}(IDpelOser, IDpersonaje) VALUES (@IDpelOser, @IDpersonaje)`);
        console.log(response)

        return response.recordset;
    }

    updatePerPelOserById = async (id, perPelOser) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IDpelOser',sql.Int, perPelOser?.IDpelOser ?? 1)
        .input('IDpersonaje',sql.Int, perPelOser?.IDpersonaje ?? 1)
        .query(`UPDATE ${perPelOserTabla} SET IDpelOser = @IDpelOser, IDpersonaje = @IDpersonaje WHERE IDperPelOser = ${id}`);
        console.log(response)

        return response.recordset;
    }

    deletePerPelOserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${perPelOserTabla} WHERE IDperPelOser = @id`);
        console.log(response)

        return response.recordset;
    }
}