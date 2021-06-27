import { useSession } from "next-auth/client";
import React, {useEffect} from "react"
import { LoginButton } from "../components/LoginButton";
import { useRouter } from "next/router";
import { Button } from "../components/Button";
import Icon from "../components/Icon";

const SignInPage = ()=>{
    const [session, loading] = useSession()
    const router = useRouter();
    useEffect(()=>{
        if(session){
            router.push("/");
        }
    }, [session])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 md:flex space-x-12 divide-x-0 md:divide-x md:divide-gray-300 shadow-xl rounded-xl p-6">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-extrabold text-green-400">Login to PetPic</h1>
                        <div className="my-8 grid grid-cols-1 gap-3">
                            <LoginButton name="discord">Continue with Discord</LoginButton>
                            <LoginButton name="spotify">Continue with Spotify</LoginButton>
                            <LoginButton name="github">Continue with Github</LoginButton>
                            <LoginButton name="google">Continue with Google</LoginButton>
                        </div>
                    </div>
                    <img className="hidden md:block md:w-1/2 md:h-96" src="/vectors/owner-and-pet.svg"/>

            </div>
        </div>
    )
}


export default SignInPage;