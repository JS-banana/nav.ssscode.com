import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/react';

const Header: React.FC = () => (
  // const router = useRouter();
  // const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;

  <Box h="56px" bg="blue.100" alignItems="center" pl="16px">
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="3xl"
      fontWeight="extrabold"
    >
      nav.ssscode.com
    </Text>
  </Box>
);
export default Header;
