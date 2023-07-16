import * as fs from 'fs';

const readJsonFile = (filePath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (e) {
                    reject(e);
                }
            }
        });
    });
};

// 使用例
readJsonFile('./src/prompt.json')
    .then((json) => {
        // JSONを連想配列として処理する
        console.log(json);
    })
    .catch((err) => {
        console.error(err);
    });



