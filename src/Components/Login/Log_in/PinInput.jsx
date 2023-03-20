import React from 'react'
import { Flex, PinInput, PinInputField } from "@chakra-ui/react"

export function PinInputOtp({getOtp}) {
    return (
        <Flex w="100%" justifyContent="space-between">
            <PinInput type='numeric' size="lg" otp
                onChange={(e) => { getOtp(e) }} >
                <PinInputField color="white" />
                <PinInputField color="white" />
                <PinInputField color="white" />
                <PinInputField color="white" />
            </PinInput>
        </Flex>
    )
}
