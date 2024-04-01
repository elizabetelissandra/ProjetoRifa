import {Db, MongoClient} from 'mongodb';
import { url } from './mongoURL';


export const client = new MongoClient(url)

export const db = client.db('cluster');