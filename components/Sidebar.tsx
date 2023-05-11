'use client'

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";


function Sidebar() {
  const { data:session } = useSession();
  const [chats, loading, error] = useCollection(session && query(collection(db, "users", session?.user?.email!, "chats"), orderBy("createdAt", "asc")));

  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
                <NewChat/>
            <div className="hidden sm:inline">
              <ModelSelection />
            </div>
            <div className="flex flex-col space-y-2 my-2">
              {
                loading && (
                  <div className="animate-pulse text-center text-white"><p>Loading Chats...</p></div>
                )
              }
            {
              chats?.docs.map(chat => (
                <ChatRow key={chat.id} id={chat.id} />
                ))

              }
              </div>

        </div>
        {session && 
        
        <div className="flex justify-items-center justify-center">
        <div className="flex">
        <Image src={session.user?.image!} width={60} height={60} alt="DP" className="rounded-full cursor-pointer mx-2 mb-2 hover:opacity-50" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white pb-1">{session.user?.name}</h2>
          <button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700 text-white px-[4px] py-[2px] rounded"> Sign Out</button>
        </div>
        </div>
        }
    </div>
  )
}

export default Sidebar