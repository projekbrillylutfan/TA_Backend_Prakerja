import dbPool from "../utils/db.js";

export const getData = () => {
    const sql = "SELECT id_barang, nama, harga, stok, des, kategori, barang_masuk, barang_update FROM barang LIMIT 1000";
    
    return dbPool.query(sql);
}

export const createData = (nama, harga, stok, des, kategori, id_barang) => {
    let createdAt = new Date();
    const sql = "INSERT INTO barang (id_barang, nama, harga, stok, des, kategori, barang_masuk) VALUE (?, ?, ?, ?, ?, ?, ?)";
    const value = [id_barang, nama, harga, stok, des, kategori, createdAt];
    const result = dbPool.query(sql, value)

    return result;
}

export const updateData = (nama, harga, stok, des, kategori, id_barang) => {
    let updatedAt = new Date();

    const sql = "UPDATE barang SET nama = ?, harga = ?, stok = ?, des = ?, kategori = ? WHERE id_barang = ?";
    const value = [nama, harga, stok, des, kategori, id_barang]
    const result = dbPool.query(sql, value)

    return result;
}

export const deleteData = (id_barang) => {
    const sql = "DELETE FROM barang WHERE id_barang = ?";
    const result = dbPool.query(sql, [id]);

    return result;
}

/*export const getDataByEmail = (email) => {
    const sql = "SELECT user_id, name, email, password FROM users WHERE email = ?";
    
    return dbPool.query(sql,[email]);
}

export const getDataById = (id) => {
    const sql = "SELECT user_id, name, email, password FROM users WHERE user_id = ?";
    return dbPool.query(sql, [id]);
}*/