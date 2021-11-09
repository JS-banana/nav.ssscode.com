/**
 * @name Sider
 * @description 侧边菜单导航
 */

import { Box, Flex } from '@chakra-ui/react';

const Sider = () => (
  <Box w="180px" bgColor="Menu">
    <Flex flexDirection="column" p="16px">
      <Box>导航一</Box>
      <Box>导航二</Box>
    </Flex>
  </Box>
);

export default Sider;
