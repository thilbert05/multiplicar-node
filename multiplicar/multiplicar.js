const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    } 
    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`./tablas/tabla_${base}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla_${base}.txt`);
      }
    });
  });
};

const listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
      console.log(`El valor introducido ${base} no es un número`);
    } 

    console.log('=============================='.green);
    console.log(`=========Tabla del ${base}==========`.green);
    console.log('=============================='.green);
    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`.green);
    }
    console.log('=============================='.green);
};

module.exports = {
  crearArchivo,
  listarTabla
};
