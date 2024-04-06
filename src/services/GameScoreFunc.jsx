import { useState } from "react";
import { historyEndPoint } from "./api";
import { apiConnector } from "./apiConnector";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { SENDHISTORY_API, SENDAllGAMEHISTORY_API } = historyEndPoint



export async function historySend(gameName, gameScore, token) {


    try {
        const response = await apiConnector("POST", SENDAllGAMEHISTORY_API, {
            game: gameName,
            firstPlayerScore:gameScore
        },
            {
                Authorization: `Bearer ${token}`,
            }
        )


        console.log("Send History............", response)
        if (!response.data.success) {
            throw new Error(response.data.message)
        }


        toast.success("Score Added")

    }
    catch (error) {
        console.log(error)
    }
}




export const allGameHistorySend = async (gameName, gameScore, oldToken) => {
    // const {token} = useSelector( state => state.auth)
    const token = oldToken.substring(1, oldToken.length - 1)

    try {

     
        const response = await apiConnector("POST", SENDAllGAMEHISTORY_API, {
            game: gameName,
            firstPlayerScore: gameScore
        },
            { Authorization: `Bearer ${token}`, }
        )


        console.log("Send History............", response)
        if (!response.data.success) {
            throw new Error(response.data.message)
        }


        toast.success("Score Added")

    }
    catch (error) {
        console.log(error)
    }
}
