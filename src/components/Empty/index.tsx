import { Flex } from "@chakra-ui/react";
import emptyGif from "../../assets/empty.gif";
export function Empty() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      marginTop={"16px"}
    >
      <img src={emptyGif} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>

      <p>Crie tarefas e organize seus itens a fazer</p>
    </Flex>
  );
}
