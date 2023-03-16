import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"
import {
    VStack, HStack, Heading, Button, Flex, Divider, Image, SimpleGrid, GridItem, Input, FormLabel, FormControl,
    Radio, RadioGroup, FormHelperText, Checkbox, Link, Text,keyframes
} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"
// const animationKeyframes = keyframes`
//   0% { transform:  rotate(0deg);  }
//   100% { transform:  rotate(360deg); }
// `;

// const animation = `${animationKeyframes} 5s linear infinite`;
// const clint_id="577316870252-rj741d84b5410lalp73fun6l5fg1bhci.apps.googleusercontent.com"
// try{
//     const Userdata=await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
//         headers:{
//             "Authorization": `Bearer ${response.access_token}`
//         }
//     })
//     console.log(Userdata.data)
// }catch{
//     console.log("error")
// }


function Signup() {

    const login = useGoogleLogin({
        onSuccess: async response =>{
            try{
                const Userdata=await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers:{
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                console.log(Userdata.data)
                navigate("/")
            }catch{
                console.log("error")
            }
        },
      });

    const navigate=useNavigate()
function Sign_up(){
navigate("/")
}
    return <>
        <VStack w="1fr" bgGradient='linear(to-b, #1ed760, RGBA(0, 0, 0.5, 0.9),#000000)' >
            <Flex mb={["90px", "75px", "75px"]}>
                <VStack mt="40px" h="80px" >
                    <Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                        alt='Spotify_Logo' h="full" />
                    <Heading fontSize="2rem" letterSpacing="-0.04em" textAlign="center">
                        Sign up for free to start listening.</Heading>
                </VStack>
            </Flex>
            <Flex display="flex" align="center"  
            direction={["column", "column", "row"]} justifyContent="center" w="90%" gap="20px" >
                <VStack h="full" w="full" >
                    <Button h="50px" w="65%" borderRadius="50px"
                     mt={["auto", "auto", "-150px"]} _hover={{ bg: "#405a93", w: "68%", h: "51px", fontSize: "17px" }}
                      bg="#405a93" mb={["10px", "10px", "20px"]} color="white"><Image
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/122_Facebook_F_logo_logos-512.png"
                         h="42%"
                        bg="white" borderRadius="90%" mr="10px" /> Sign up with Facebook</Button>
                    <Button h="50px" w="65%" borderRadius="50px" _hover={{ w: "68%", h: "51px", fontSize: "17px" }} onClick={login}><Image
                        src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" h="53%"
                        mr="10px" /> Sign up with Google</Button>
                </VStack>
                <Divider orientation='vertical' />
                <VStack h="full" w="75%" display="flex"  alignItems="center" justifyContent="center" mb="50px"
                bgGradient='linear(to-b,#000000, #1ed760)'
                  zIndex="2" >
                    <form onSubmit={Sign_up}>
                        <Flex w="full" h="90%"  bgGradient='linear(to-b, #1ed760, RGBA(0, 0, 0.5, 0.9),#000000)' justify="center" mt="5px" mb="5px" zIndex="100">
                        <FormControl w="84%" color="white" mb="80px" mt="80px" align="center" >
                            <FormLabel fontSize="0.875rem" >What's your email?</FormLabel>
                            <Input type="email" placeholder="Enter your email." border="1px solid white" _placeholder={{ color: 'white' }} _focus={{ border: "2px solid white" }} required />
                            <FormLabel fontSize="0.875rem">Confirm your email</FormLabel>
                            <Input type="email" placeholder="Enter your email again." border="1px solid white" _placeholder={{ color: 'white' }} _focus={{ border: "2px solid white" }} />
                            <FormLabel fontSize="0.875rem">Create a password</FormLabel>
                            <Input type="password" placeholder="Create a password" border="1px solid white" _placeholder={{ color: 'white' }} _focus={{ border: "2px solid white" }} />
                            <FormLabel fontSize="0.875rem">What should we call you?</FormLabel>
                            <Input type="text" placeholder="Enter a profile Name" border="1px solid white" _placeholder={{ color: 'white' }} _focus={{ border: "2px solid white" }} />
                            <FormHelperText fontSize="0.799rem" color="">This appears on your profile.</FormHelperText>
                            <FormLabel fontSize="0.875rem" mt="8px">What's your date of birth?</FormLabel>
                            <Input type="date" placeholder="dd/mm/yyyy" border="1px solid white" _placeholder={{ color: 'white' }} _focus={{ border: "2px solid white" }} />
                            <FormLabel fontSize="0.875rem">What's your gender?</FormLabel>
                            <RadioGroup defaultValue='' _focus={{ border: "2px solid white" }} display="flex" flexWrap="wrap" colorScheme="green">
                                <HStack spacing='10px' display="flex" flexWrap="wrap">
                                    <Radio value='male'>Male</Radio>
                                    <Radio value='female'>Female</Radio>
                                    <Radio value='other'>Others</Radio>
                                    <Radio value='Prefer not to say'>Prefer not to say</Radio>
                                </HStack>
                            </RadioGroup>
                            <Checkbox mt="12px" colorScheme="green"><Text fontSize='13px' mt="12px" >Share my registration data with Spotify's content providers for marketing purposes.</Text></Checkbox>
                            <Text fontSize="10px" mt="15px" textAlign="center" >By clicking on sign-up, you agree to Spotify's <Link href="https://www.spotify.com/us/legal/end-user-agreement/" color="#1ed760">Terms and Conditions of Use</Link>.</Text>
                            <Text fontSize="10px" mt="15px" textAlign="center" >To learn more about how Spotify collects, uses, shares and protects your personal data, please see <Link href="https://www.spotify.com/us/legal/end-user-agreement/" color="#1ed760">Spotify's Privacy Policy</Link>.</Text>
                            <Input type="submit" value="Sign up" bg="#1ed760" color="black" fontSize="20px" fontWeight="700" h="56px"
                                borderRadius="40px" mt="15px" w="140px" border="none" _hover={{ bg: "#b5f7bc" }} />
                            <Text fontSize="16px" mt="18px" textAlign="center" >Have an account? <Link href="https://www.spotify.com/us/legal/end-user-agreement/" color="#1ed760">Log in</Link>.</Text>
                        </FormControl>
                        </Flex>
                    </form>
                </VStack>
            </Flex>
        </VStack>
    </>
}

export { Signup }