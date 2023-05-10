import query from "@/lib/queryApi";
import type { NextApiResponse, NextApiRequest } from "next";
import admin from "firebase-admin";
import ChatGPT from '@/assets/chatGPT.png'
import { adminDb } from "@/firebaseAdmin";

type Data = {
    answer: string
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    console.log('## hi');
    console.log('##req', req);
    // const {prompt, chatId, model, session} = req.body;

    // if(!prompt){
    //     res.status(400).json({answer: "Please provide a prompt!"});
    //     return;
    // }

    // if(!chatId){
    //     res.status(400).json({answer: "Please provide a valid chat ID!"});
    //     return;
    // }
    
    // console.log('### before making query');
    // const response = await query(prompt, chatId, model);
    // const message: ResMessage = {
    //     text: response || "ChatGPT was unable to find an answer for that!",
    //     createdAt: admin.firestore.Timestamp.now(),
    //     user: {
    //         _id: "ChatGPT",
    //         name: "ChatGPT",
    //         avatar: ChatGPT,
    //     }
    // }

    // await adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message);

    // res.status(200).json({answer: message.text});
    res.status(200).json({answer: 'Hello World'});
}

export { handler as POST, handler as GET }