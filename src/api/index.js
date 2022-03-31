import { db } from '../config/firebase';

export const fetchProjectsApi = async () => {
    const dbRef = await db.collection('projects').get();
    return dbRef.docs.map(doc => doc.data());
};