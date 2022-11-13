import { deleteFile } from 'react-s3';
import api from '../api/api';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = 'vinum-wine';
const REGION = 'us-east-1';
const ACCESS_KEY = 'AKIATDAWPY26KWRISHLB';
const SECRET_ACCESS_KEY = 'DMlnDmu8Bko3zvwXP';

const bucket = new S3Client(
    {
        credentials: {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY,
        },
        region: REGION,
    }
);

const config = {
    bucketName: S3_BUCKET,
    dirName: 'wines',
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

export async function UploadImageToS3(file) {
    let location = '';

    const params = {
        Bucket: S3_BUCKET,
        Key: `wines/` + file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: file.type
    };

    try {
        await bucket.send(new PutObjectCommand(params));
        console.log("SUCCESS");
        location = 'https://vinum-wine.s3.amazonaws.com/' + `wines/` + file.name;
    } catch (error) {
        return error.toString()
    }
    
    return location
}

export async function DeleteImageToS3(wineId) {

    let filename = '';

    await api.get(`/wine/find/${wineId}`)
        .then(response => {
            // pegando a string da imagem e retirando o somente o nome
            filename = response.data.image.substr(42, response.data.image.length);
        })
        .catch(e => console.error(e))

    await deleteFile(filename, config)
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
}