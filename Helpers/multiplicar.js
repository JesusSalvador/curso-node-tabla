const fs=  require('fs'); //file system, sistema manejador de archivos
const { Module } = require("module");
require ('colors');


const crearArchivo = async (base=5, listar= false, hasta=10)=>{

    try {               

        let salida, consola= '';

        for (let i=1; i<=hasta; i++){
        salida+=`${base} x ${i} = ${base*i}\n`;
        consola+=`${base} ${'x'.blue} ${i} ${'='.blue} ${base*i}\n`; 
        }

        if(listar){
            console.log('=================='.green);
            console.log('tabla del '.green, base);
            console.log('=================='.green);
            console.log(consola);
        }
        

     //fs.writeFile(`tabla-${base}.txt`, salida,(err)=>{
        //  if(err)throw err;
     //console.log(`tabla-${base}.txt creado`);
        //})

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;        
    } catch (err) {
        trhow (err);
    }       

}   

module.exports = {
    crearArchivo
}