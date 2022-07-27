import { Flex } from "@chakra-ui/react";
import { Info } from "../Info";
import { Task } from "../Task";
import { v4 as uuidv4 } from "uuid";

export function TasksList() {
  const tasks = [
    { id: uuidv4(), task: { title: "comprar uma moto", isComplete: false } },
    {
      id: uuidv4(),
      task: { title: "Jogar aquele valorant", isComplete: true },
    },
  ];
  console.log(tasks);
  const handleTaskCounter = () => {
    const concluded: any = [];

    tasks.map((task) => {
      if (task.task.isComplete) {
        concluded.push(task);
      }
    });

    return concluded.length;
  };
  return (
    <Flex w={" 736px"} h={"527px"} flexDirection={"column"} marginTop={"64px"}>
      <Flex justifyContent={"space-between"}>
        {tasks.length > 0 && (
          <Info
            title="Tarefas criadas"
            total={tasks.length}
            hasColorTitle={false}
          />
        )}

        <Info title="Concluidas" total={handleTaskCounter()} />
      </Flex>

      <Flex flexDirection={"column"}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task.task} />;
        })}
      </Flex>
    </Flex>
  );
}
