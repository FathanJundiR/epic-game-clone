import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  developer: string;
  publisher: string;
  platform: string[];
  genres: string[];
  thumbnail: string;
  logo: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_PRODUCT = "products";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
}

export const getProducts = async() => {
  const db = await getDb();
  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find({})
    .toArray()) as ProductModel[];
  
    return products;
}

export const getProductById = async (id: string) => {
  const db = await getDb();
  const objectId = new ObjectId(id);

  const product = (await db.collection(COLLECTION_PRODUCT).findOne(
    {_id: objectId},
  )) as ProductModel;

  return product;
}