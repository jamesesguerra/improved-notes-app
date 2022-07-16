import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'

const EditModal = ({ isOpen, onOpen, onClose, currentLetter }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'sm', md: 'md'}}
        scrollBehavior='inside'
        isCentered
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Letter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <FormControl py='15px'>
                    <FormLabel htmlFor='sender_name'>Sender's Name</FormLabel>
                    <Input id='sender_name' type='text' value={currentLetter.sender} />
                </FormControl>
                <FormControl py='15px'>
                    <FormLabel htmlFor='recipient_name'>Recipient's Name</FormLabel>
                    <Input id='recipient_name' type='text' value={currentLetter.recipient} />
                </FormControl>
                <FormControl py='15px'>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea id='message' minH='200px' value={currentLetter.message} />
                </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button leftIcon={<CheckIcon />} colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant='ghost'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditModal