'use server'

import { registerAPI } from "@/lib/api/auth";
import { getToken, logout, setSessionToken } from "@/lib/session";

export async function loginAction(data){
    await setSessionToken(data)
}

 export async function registerAction(data){
    await registerAPI(data)
}

export async function getAccessTokenAction() {
    return await getToken();
}

export async function isLoggedInAction() {
    const token = await getToken();
    return !!token;
}

export async function logOutAction(){
    await logout()
}