import React from "react"
import { Button } from "../components/Button";
import Icon from "../components/Icon";


const LoginPage = ()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 md:flex space-x-12 divide-x-0 md:divide-x md:divide-gray-300 shadow-xl rounded-xl p-6">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-extrabold text-green-400">Login to PetPic</h1>
                        <div className="my-8 grid grid-cols-1 gap-3">
                            <Button color="discord" className="w-full justify-center" textClassName="md:text-lg" iconName="discord" iconClassName="w-6 w-6 sm:w-8 sm:h-8" iconColor="white">Continue with Discord</Button>
                            <Button color="twitter" className="w-full justify-center" textClassName="md:text-lg" iconName="twitter" iconClassName="w-6 w-6 sm:w-8 sm:h-8" iconColor="white">Continue with Twitter</Button>
                            <Button color="github" className="w-full justify-center" textClassName="md:text-lg" iconName="github" iconClassName="w-6 w-6 sm:w-8 sm:h-8" iconColor="white">Continue with Github</Button>
                            <Button color="google" className="w-full justify-center" textClassName="md:text-lg" iconName="google" iconClassName="w-6 w-6 sm:w-8 sm:h-8" iconColor="white">Continue with Google</Button>
                        </div>
                    </div>
                    <img className="hidden md:block md:w-1/2 md:h-96" src="/vectors/owner-and-pet.svg"/>
            </div>
        </div>
    )
}

export default LoginPage;