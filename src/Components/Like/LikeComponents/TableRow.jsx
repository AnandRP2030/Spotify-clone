import {AiFillHeart} from 'react-icons/ai'
import {Tr, Td, Icon} from '@chakra-ui/react';

const TableRow = () => {

    const iconStyle={
        color:'#1ed760',
        cursor: 'pointer'
    }

    const handleRemove = () => {
        alert ('remove function pending')
    }

    return (
        <Tr>
              <Td>#</Td>
              <Td>Title</Td>
              <Td>Type</Td>
              <Td> <Icon style={iconStyle} as={AiFillHeart} onClick={handleRemove}/> </Td>
              <Td>4:23 mins</Td>
        </Tr>
    )
}

export default TableRow;