import { Avatar, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserPosts = () => {
   return (
      <Link to={"/aliumusa/post/1"}>
         <Flex gap={3} mb={4} py={5}>
            <Flex flexDir={"column"}>
               <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"} />
               <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
               <Box pos={"relative"} w={"full"}>
                  <Avatar
                     src="/post1.png"
                     name="Wale Adenuga"
                     size={"xs"}
                     pos={"absolute"}
                     top={"0"}
                     left={"15px"}
                     padding={"2px"}
                  />
                  <Avatar
                     src="/post1.png"
                     name="Ade Kunle"
                     size={"xs"}
                     pos={"absolute"}
                     bottom={"0"}
                     right={"-5px"}
                     padding={"2px"}
                  />
                  <Avatar
                     src="/post1.png"
                     name="Wole Soyinka"
                     size={"xs"}
                     pos={"absolute"}
                     bottom={"0"}
                     left={"4px"}
                     padding={"2px"}
                  />
               </Box>
            </Flex>
         </Flex>
      </Link>
   );
};

export default UserPosts;
