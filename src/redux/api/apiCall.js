import axios from "axios";


export async function makeRequest({url, data = {}, method = "get", accessToken, header = {}}) {

    const headers = {
        Authorization: 'Barear' + accessToken,
        "Content-Type": "application/json",
        header
    }

    if (method === "get") {
        return axios({
            url: url,
            method: "get",
            headers: headers
        }).then((response) => {
            return Promise.resolve(response);
        }).catch((error) => {
            console.log("API Call error: ", error);
            return Promise.reject(error);
        })
    } else {
        console.log("API Call error: pass valid method");
    }

}