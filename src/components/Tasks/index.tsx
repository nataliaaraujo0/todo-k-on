import { Flex } from "@chakra-ui/react";
import { Info } from "../Info";
import { Task } from "../Task";

export function Tasks() {
  return (
    <Flex w={" 736px"} h={"527px"} flexDirection={"column"} marginTop={"64px"}>
      <Flex justifyContent={"space-between"}>
        <Info title="Tarefas criadas" total={10} hasColorTitle={false} />
        <Info title="Concluidas" total={2} />
      </Flex>
      <Flex flexDirection={"column"}>
        <Task
          task={{
            title:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut iusto harum natus consectetur. Aliquam et.",
          }}
        />
      </Flex>
    </Flex>
  );
}
