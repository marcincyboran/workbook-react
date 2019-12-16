export default class Validators {
    private static imgsHex = ['89504e47', '47494638', 'ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2', 'ffd8ffe3', 'ffd8ffe8'];

    static validateImages = (file: File) => {
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onerror = () => reject('Something went wrong');
            fileReader.onloadend = () => {
                let header = '';
                const result = fileReader.result;
                const u8arr = new Uint8Array(result as ArrayBuffer).subarray(0, 4);
                for (let i = 0; i < u8arr.length; i++) {
                    header += u8arr[i].toString(16);
                }
                resolve(Validators.imgsHex.includes(header));
            };
            fileReader.readAsArrayBuffer(file);
        });
    };
}
