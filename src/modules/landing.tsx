import React, { useEffect } from "react"
import {
    useSession, signIn, signOut
  } from 'next-auth/client'
import { Button } from "../components/Button";
import { useRouter } from "next/router";

const Landing = ()=>{
  const [session, loading] = useSession()
  const router = useRouter();

    useEffect(()=>{
      console.log(session)
    },[session])
    return <>
      {session && <div>
        <h1>PetPic</h1>
        Signed in as {session.user.name} <br/>
        <img src={session.user.image} width="45px" height="auto"/>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>}

      {!session && <div>
        <h1>PetPic</h1>
        Not Signed In
        <Button onClick={() => signIn()}>Sign In</Button>
        </div>}

        <h3>This text is viewable to all users!</h3>
    </>
    
}

export default Landing;