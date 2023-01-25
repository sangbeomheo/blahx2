import { NextPage } from 'next';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Servicelayout } from '@/components/service_layout';
import { GoogleLoginButton } from '@/components/google_login_button';

const IndexPage: NextPage = function () {
  return (
    <Servicelayout title="test">
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="main logo" />
        <Flex justify="center">
          <Heading>#BlahBlah</Heading>
        </Flex>
      </Box>
      <Center mt="20">
        <GoogleLoginButton />
      </Center>
    </Servicelayout>
  );
};

export default IndexPage;
