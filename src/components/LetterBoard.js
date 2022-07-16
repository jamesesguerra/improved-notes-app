import { useState } from 'react';
import Letter from './Letter'
import LetterModal from './LetterModal';
import { Box, Flex, useDisclosure } from '@chakra-ui/react'

const letters = [
    {sender: 'james', recipient: 'james', message: 'hi', date: '8383'},
    {sender: 'james', recipient: 'james', message: 'hi', date: '400'},
    {sender: 'james', recipient: 'james', message: 'hi', date: '500'},
    {sender: 'james', recipient: 'james', message: 'hi', date: '313'}
];

const LetterBoard = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentLetter, setCurrentLetter] = useState({});

    return (
        <Box
            bg='gray.50'
            h='2000px'
            flex='1'
            pt='50px'
            pl={{ md: '350px' }}
            pr={{ md: '20px' }}
            px={{ base: '31px'}}
        >   
            <Flex
                justify='space-between'
                wrap='wrap'
                gap={6}
            >
                {letters.map((letter, index) => {
                    return <Letter 
                        key={index} 
                        sender={letter.sender}
                        recipient={letter.recipient}
                        message={letter.message}
                        date={letter.date}
                        onOpen={onOpen}
                        setCurrentLetter={setCurrentLetter}
                        />
                })}
            </Flex>
            <LetterModal
                isOpen={isOpen} 
                onOpen={onOpen}
                onClose={onClose}
                currentLetter={currentLetter}
            />
        </Box>
    )
}

export default LetterBoard