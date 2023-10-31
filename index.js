const PORT = 3333;
const express = require("express");
const app = express();
const cors = require("cors")
const db = require("./mysql2")

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return req.status(200).send("<h1>MySQL-API</h1>")
});

db.getConnection((error, connection) => {
  if(error){
    console.log(error);
  }
  console.log(`Connect to mysql ${connection.threadId}`);
})

app.get("/discover", (req, res) => {
  db.query("SELECT * FROM namatable;", (error, result) => {
    if(error){
      res.status(500).send({
        success : false,
        message : error.message,
      });
    }
  });
});

// Rute untuk pencarian berdasarkan parameter-parameter
app.get("/discover", (req, res) => {
  // Ekstrak parameter-parameter pencarian dari query string dalam URL
  const filters = {
    location: req.query.loc,         // Parameter: Lokasi
    category: req.query.cat,         // Parameter: Kategori
    onlineStatus: req.query.on,      // Parameter: Status online
    paymentType: req.query.pay,      // Parameter: Jenis pembayaran
  };

  // Buat kondisi berdasarkan parameter-parameter yang ada
  const conditions = Object.entries(filters)
    .filter(([key, value]) => value !== undefined)   // Hanya termasuk parameter yang tidak kosong
    .map(([key, value]) => `${key} = '${value}'`)    // Ubah parameter menjadi kondisi SQL
    .join(" AND ");                                   // Gabungkan semua kondisi dengan operator AND

  // Membangun kueri SQL berdasarkan kondisi yang dibuat
  const sqlQuery = `SELECT * FROM namatable WHERE ${conditions}`;

  // Eksekusi kueri SQL untuk mengambil data dari database
  db.query(sqlQuery, (error, results) => {
    if (error) {
      // Jika terjadi kesalahan dalam kueri, kirim respons kesalahan
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }

    // Jika kueri berhasil, kirim respons dengan data yang ditemukan
    return res.status(200).send({
      success: true,
      result: results,
    });
  });
});


app.listen(PORT, () => {
  console.log("API RUNNING", PORT);
});
