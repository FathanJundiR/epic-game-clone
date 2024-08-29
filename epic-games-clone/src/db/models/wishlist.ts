import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";


export type WishlistModel = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_WISHLIST = "wishlists";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
}

export const getWishlists = async() => {
  const db = await getDb();
  const wishlists = (await db
    .collection(COLLECTION_WISHLIST)
    .find({})
    .toArray()) as WishlistModel[];

  return wishlists;
}