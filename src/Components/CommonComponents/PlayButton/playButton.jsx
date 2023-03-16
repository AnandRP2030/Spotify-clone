import { Center, Square, Circle, Icon } from '@chakra-ui/react'
import { RxTriangleRight} from 'react-icons/rx'

import {CgPlayPause} from 'react-icons/cg'
import {useState} from 'react';

const PlayButton = () => {

    const[isPlaying, setIsPlaying] = useState(false);
    
    const handlePlaybtn = () => {
        setIsPlaying(!isPlaying);
    }

    const btnStyle = {
        cursor: 'pointer'
    }

    return (
        <Circle style={btnStyle} size='50px' pos='relative' left='40px' color='#000000' onClick={handlePlaybtn} bg='#1ed760'>
            <Icon  boxSize={10}  as={isPlaying ?  CgPlayPause : RxTriangleRight} />
        </Circle>
    )
}

export default PlayButton;