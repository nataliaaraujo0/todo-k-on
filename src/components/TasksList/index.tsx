import { Flex } from "@chakra-ui/react";
import { Info } from "../Info";
import { Task } from "../Task";

export function TasksList() {
  const tasks = [
    { id: 1, task: { title: "comprar uma moto", isComplete: false } },
    { id: 2, task: { title: "Comer aquela pizza", isComplete: false } },
    { id: 3, task: { title: "Jogar aquele valorant", isComplete: true } },
  ];
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
