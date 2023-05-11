import query from "@/lib/queryApi";
import admin from "firebase-admin";
import ChatGPT from '@/assets/chatGPT.png'
import { adminDb } from "@/firebaseAdmin";

export const askQuestion = async ( prompt:string, chatId:string, model:string, session:any ) => {

    if(!prompt){
        return {answer: "Please provide a prompt!"};
    }

    if(!chatId){
        return {answer: "Please provide a valid chat ID!"};
    }
    
    console.log('### before making query');
    const response = await query(prompt, chatId, model);
    const message: ResMessage = {
        text: response || "ChatGPT was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: ChatGPT,
        }
    }

    return {answer: message.text};
}
