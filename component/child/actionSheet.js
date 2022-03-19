import React from 'react';
import {Actionsheet, Box, Button, Center, Text, useDisclose} from 'native-base';

function ActionSheet(props) {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [is, setIs] = React.useState(true);
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={200} p={2} justifyContent="flex-start" gap={2}>
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}>
              Albums
            </Text>
            <Button onPress={onClose}>Cancel</Button>
            <Button shadow={2} onPress={() => console.log('hello world')}>
              Click me
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
export default ActionSheet;
