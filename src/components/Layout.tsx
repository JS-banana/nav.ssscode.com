import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Sider from './Sider';
// import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const BaseLayout: React.FC<Props> = (props) => (
  <Box
    w="100vw"
    h="100vh"
    bgGradient={[
      'linear(to-tr, teal.300, yellow.400)',
      'linear(to-t, blue.200, teal.500)',
      'linear(to-b, orange.100, purple.300)',
    ]}
  >
    <Header />
    <Box display="flex" w="100%" minHeight="calc(100vh - 56px)">
      <Sider />
      <Flex flex="1" p="24px">
        {props.children}
      </Flex>
    </Box>
    {/* <Footer /> */}
  </Box>
);

export default BaseLayout;
