import { useState, useEffect } from 'react';
import Letter from './Letter'
import LetterModal from './LetterModal';
import EditModal from './EditModal';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

import letterService from '../actions/letters';

const LetterBoard = ({ letters, setLetters }) => {

    useEffect(() => {
        letterService
        .getAll()
        .then(initialLetters => setLetters(initialLetters));
    }, [setLetters]);

    const { isOpen: isReadOpen, onOpen: onReadOpen, onClose: onReadClose } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
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
                justify='space-evenly'
                wrap='wrap'
                gap={6}
            >
                {letters.map((letter, index) => {
                    return <Letter 
                        key={index} 
                        senderName={letter.senderName}
                        recipientName={letter.recipientName}
                        message={letter.message}
                        id={letter.id}
                        date={letter.date}
                        onOpen={onReadOpen}
                        setCurrentLetter={setCurrentLetter}
                        />
                })}
            </Flex>
            <LetterModal
                isOpen={isReadOpen} 
                onOpen={onReadOpen}
                onEditOpen={onEditOpen}
                onClose={onReadClose}
                currentLetter={currentLetter}
                letters={letters}
                setLetters={setLetters}
            />
            <EditModal 
                isOpen={isEditOpen} 
                onOpen={onEditOpen}
                onClose={onEditClose}
                currentLetter={currentLetter}
                letters={letters}
                setLetters={setLetters}
                setCurrentLetter={setCurrentLetter}
            />
        </Box>
    )
}

export default LetterBoard