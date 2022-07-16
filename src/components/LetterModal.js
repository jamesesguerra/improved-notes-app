import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
  } from '@chakra-ui/react'

import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const LetterModal = ({ currentLetter, isOpen, onClose }) => {
  return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody py='20px'>
              <Text textAlign='right'>{currentLetter.date}</Text>
              <Text pb='20px'>Dear {currentLetter.recipient},</Text>
              <Text pb='20px'>{currentLetter.message}</Text>
              <Text pb='10px' textAlign='right'>Sincerely,</Text>
              <Text textAlign='right'>{currentLetter.sender}</Text>
            </ModalBody>
            <ModalFooter>
            <Button leftIcon={<EditIcon />} variant='ghost' mr={3} onClick={onClose}>
                Edit
            </Button>
            <Button leftIcon={<DeleteIcon />} colorScheme='red'>Delete</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}

export default LetterModal