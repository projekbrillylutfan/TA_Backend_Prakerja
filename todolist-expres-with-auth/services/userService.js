import * as UserRepo from '../repository/user.js';
import { errorResp, successResp } from '../utils/response.js';


export const getUsers = async (request, response, next) => {
    try {
        const [result] = await UserRepo.getData();
        successResp(response, "success", result)
    } catch (error) {
        next(error)
    }
}

export const addProduct = async (request, response, next) => {
    try {
        let id_barang = request.body.id_barang;
        let nama = request.body.nama
        let harga = request.body.harga;
        let stok= request.body.stok;
        let des = request.body.password;
        let kategori = request.body.kategori;
        //let createdAt = request.body.createdAt

        const product = await UserRepo.createData({
            id_barang, nama, harga, stok, des, kategori, //createdAt
        });

        // Jika berhasil, kirim respons sukses
        successResp(response, "Berhasil menambahkan produk", product);
    } catch (error) {
        // Tangani kesalahan dengan memanggil fungsi next dan meneruskan kesalahan
        next(error);
    }
}

export const updateProduct = async (request, response, next) => {
    try {
        let id_barang = request.body.id_barang;
        let nama = request.body.nama
        let harga = request.body.harga;
        let stok = request.body.stok;
        let des = request.body.password;
        let kategori = request.body.kategori;
        //let createdAt = request.body.createdAt

        const updatedProduct = await UserRepo.updateData(id_barang, {
            nama, harga, stok, des, kategori, //createdAt
        });

        // Jika berhasil, kirim respons sukses
        successResp(response, "Berhasil memperbarui produk", updatedProduct);
    } catch (error) {
        // Tangani kesalahan dengan memanggil fungsi next dan meneruskan kesalahan
        next(error);
    }
}

export const deleteProduct = async (request, response, next) => {
    try {
        let id_barang = request.body.id_barang;

        const deletedProduct = await UserRepo.deleteData(id_barang);

        // Jika berhasil, kirim respons sukses
        successResp(response, "Berhasil menghapus produk", deletedProduct);
    } catch (error) {
        // Tangani kesalahan dengan memanggil fungsi next dan meneruskan kesalahan
        next(error);
    }
}





