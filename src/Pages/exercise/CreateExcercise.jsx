import { Box, Button, Grid, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import data from "./data.json"



export default function CreateExercise(){
    // console.log(data[1])

    return (
        <Box>
            <Text fontSize="24px" paddingTop="20px">Try Something New</Text>
            <Text fontSize="20px" paddingTop="10px" color="rgb(88, 95, 105)" paddingBottom="20px">Change up your routine with one of these exercises!</Text>
            <Grid templateColumns={{base:"repeat(2,1fr)", md:"repeat(4,1fr)", lg:"repeat(6,1fr)"}} w={{base:"90%", md:"80%", lg:"80%"}} margin="auto" gap="15px">
                {
                    data.map((el)=>(
                        <Box key={el.id} w="100%">
                            <Link to={`/exercise/details/${el.id}`}>
                                <Image src={el.image1} w="100%"/>
                                <Text fontSize="14px" margin="0px" color="rgb(51, 181, 229)" fontWeight="500">{el.title}</Text>
                                <Text fontSize="14px" margin="0px">{el.main_group},{el.detailed_group}</Text>
                            </Link>
                        </Box>
                    ))
                }
            </Grid>
            <Box marginTop="20px" marginBottom="20px">
                <Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Create Custom Exercise</Button>
            </Box>
        </Box>
    )
}

