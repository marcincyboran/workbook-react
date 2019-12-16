// module.exports.validateImage = img => {
//     TODO find replacement to filereader

//     const fileReader = new FileReader();
//     return new Promise((resolve, reject) => {
//         fileReader.onerror = () => reject('Something went wrong');
//         fileReader.onloadend = () => {
//             let header = "";
//             const result = fileReader.result;
//             const u8arr = new Uint8Array(result).subarray(0, 4);
//             for(let i = 0; i < u8arr.length; i++) {
//                 header += u8arr[i].toString(16);
//             }
//             resolve(imgsHex.includes(header))
//         };
//         fileReader.readAsArrayBuffer(img);
//     });
// };

// const imgsHex = ['89504e47',"47494638","ffd8ffe0","ffd8ffe1","ffd8ffe2","ffd8ffe3","ffd8ffe8"]
