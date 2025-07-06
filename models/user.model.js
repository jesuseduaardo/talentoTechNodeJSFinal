import { db } from '../data/data.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { generateToken } from '../utils/token-generator.js';

const userCollection = collection(db, 'users');

export const getUser = async (user) => {
    const { password, email } = user;
    const q = query(userCollection, where("email", "==", email), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    if (users.length > 0) {
        return generateToken(users[0]);
    }
    return null;
}