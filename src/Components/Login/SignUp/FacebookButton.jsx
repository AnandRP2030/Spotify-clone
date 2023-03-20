import React from 'react'
import { Button, Image } from "@chakra-ui/react"
import { LoginSocialFacebook } from "reactjs-social-login"
import { LoginSocialInstagram } from "reactjs-social-login"
import { FacebookLoginButton } from "react-social-login-buttons"
import { InstagramLoginButton } from "react-social-login-buttons"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
export function FacebookButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetail")) || [];
    function resolve(response){
            console.log(response)
            console.log(response.data.name)
            console.log(response.data.email)
            console.log(response.data.picture.data.url)
            const list={name:response.data.name,email:response.data.email,picture:response.data.picture.data.url}
            user.length=0;
            user.push(list)
            localStorage.setItem("userDetail", JSON.stringify(user))
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            })
            navigate("/")
    }
    function reject(error){
            console.log(error)
    }
    return (
    <>
        <LoginSocialFacebook
            appId='775672280828987'
            onResolve={resolve}
            onReject={reject}
            style={{display:"flex",width:"6000px" ,background:"blue"}}
        >

            <FacebookLoginButton style={{borderRadius:"50px",padding:"0 20px"}}/>
            {/* <Button
            h="50px"
            w="65%"
            borderRadius="50px"
            mt={["auto", "auto", "-150px"]}
            _hover={{
                bg: "#405a93",
                w: "490px",
                h: "51px",
                fontSize: "17px",
            }}
            bg="#405a93"
            // mb={["10px", "10px", "20px"]}
            color="white"
        >
            <Image
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/122_Facebook_F_logo_logos-512.png"
                h="42%"
                bg="white"
                borderRadius="90%"
                mr="10px"
            />{" "}
            Sign up with Facebook
        </Button> */}
        </LoginSocialFacebook>
        <LoginSocialInstagram
        clientId="5fd2f11482844c5eba963747a5f34556"
        // onSuccess={responseInstagram}
        // onFailure={responseInstagram}
        >
            <InstagramLoginButton style={{borderRadius:"50px",padding:"0 20px"}}/>
        </LoginSocialInstagram> 
    </>
    )
}
