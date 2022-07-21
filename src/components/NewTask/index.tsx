import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";

export function NewTask() {
  return (
    <Flex justifyContent={"space-between"} w={" 736px"}>
      <Input
        placeholder="Adicionar uma nova tarefa"
        w={" 500px"}
        bg={"gray.700"}
        _placeholder={{ color: "gray" }}
        color={"white"}
      />
      <Button rightIcon={<AddIcon />} colorScheme={"gray"} variant="solid">
        Criar
      </Button>
    </Flex>
  );
}
