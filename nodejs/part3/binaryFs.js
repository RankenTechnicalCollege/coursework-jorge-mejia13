import fs from 'node:fs';

const buffer = Buffer.from('Hello, Buffer!', 'utf8')
console.log(buffer)

fs.writeFile('binaryData.data', buffer, (err) => {
    if (err) {
        console.log(err)
        return;
    }

    console.log('Binary data written to binaryData.bin')

    fs.readFile('binaryData.data', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Read binary data:', data.toString('utf8'));
    });
})
