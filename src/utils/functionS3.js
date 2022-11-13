import { uploadFile, deleteFile } from 'react-s3';
import api from '../api/api';
import AWS from 'aws-sdk';
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;

const config = {
    bucketName: S3_BUCKET,
    dirName: 'wines',
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

AWS.config.update({ region: REGION, credentials: new AWS.Credentials(ACCESS_KEY, SECRET_ACCESS_KEY) });
var s3 = new AWS.S3({ apiVersion: "2006-03-01", params: { Bucket: S3_BUCKET } });

export async function UploadImageToS3(file) {
    let location = '';

    // let upload_params = { Bucket: S3_BUCKET, Key: config.dirName + '/' + file.name, Body: file };
    // let upload = new AWS.S3.ManagedUpload({ params: upload_params });

    // await upload.promise().then(
    //     function (data) {
    //         console.log('success')
    //         location = data.Location
    //     },
    //     function (err) { console.log("Failed to upload", file.name, "with error:", err.message); }
    // );

    await uploadFile(file, config)
        .then((data) => { console.log(data); location = data.location })
        .catch((err) => console.error(err))

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