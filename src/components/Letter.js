import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

const Letter = (props) => {

    const {
        sender,
        recipient,
    } = props;

    return (
        <Box 
            boxShadow='lg'
            rounded='xl'
            bgColor='white'
            flexBasis='350px'
            flexGrow='1'
            h='230px'
            position='relative'
        >   
            <Flex justifyContent='space-between'>
                <Box p='15px'>
                    <Text>TO: {sender.toUpperCase()}</Text>
                    <Text>FROM: {recipient.toUpperCase()}</Text>
                </Box>
                <Box pr='25px' pt='15px'>
                    <Tooltip hasArrow label='View letter'>
                        <ViewIcon w={6} h={6} color='blackAlpha.700' cursor='pointer' />
                    </Tooltip>
                </Box>
            </Flex>
            <Box
                bg='blackAlpha.50'
                minH='100px'
                minW='150px'
                rounded='xl'
                position='absolute'
                right='5'
                bottom='5'
            >
                <Box>
                    <hr style={{ margin: '10px 5px' }}/>
                    <hr style={{ margin: '10px 5px' }}/>
                    <hr style={{ margin: '10px 5px' }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Letter