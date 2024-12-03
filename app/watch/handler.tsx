// pages/api/proxyBlob.js
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { blobPath } = req.query;
    const azuriteUrl = `http://127.0.0.1:10000/devstoreaccount1/${blobPath}`;

    try {
        const response = await axios.get(azuriteUrl, {
            responseType: 'stream',
        });
        res.setHeader('Content-Type', response.headers['content-type']);
        response.data.pipe(res);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: 'Proxy error', error: error.message });
    }
}