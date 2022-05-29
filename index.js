// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  let jmlData = dataYangAkanDilooping.length;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */

  let hasilLooping = [];
  let dataPria = [];
  let dataWanita = [];
  for (let i = 0; i < jmlData ; i++) {
    hasilLooping.push(dataYangAkanDilooping[i]["namaDepan"]+" "+dataYangAkanDilooping[i]["namaBelakang"]);

    switch (dataYangAkanDilooping[i]["jenisKelamin"]){
      case 'M':
        dataPria.push(dataYangAkanDilooping[i]["namaDepan"]+" "+dataYangAkanDilooping[i]["namaBelakang"]);
        break;
      case 'F':
        dataWanita.push(dataYangAkanDilooping[i]["namaDepan"]+" "+dataYangAkanDilooping[i]["namaBelakang"]);
        break;
    }
  }

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = dataPria.length;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = dataWanita.length;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = jumlahPria > jumlahWanita ? "Jumlah Pria lebih banyak dari Wanita" : jumlahPria < jumlahWanita ? "Jumlah Wanita lebih banyak dari Pria" : "Jumlah Pria dan Wanita berimbang";

  console.log(komentar);
  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
