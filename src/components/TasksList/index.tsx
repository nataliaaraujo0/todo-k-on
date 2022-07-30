import { Flex, Input, Button } from "@chakra-ui/react";
import { Info } from "../Info";
import { CardTask } from "../CardTask";
import { v4 as uuidv4 } from "uuid";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function TasksList() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "comprar pizza", isComplete: false },
    { id: uuidv4(), title: "Assar bolo", isComplete: true },
    { id: uuidv4(), title: "Ver anime", isComplete: true },
  ]);

  const handleCreateNewTask = () => {
    event.preventDefault();

    console.log(event.target.task.value);
    setTasks([...tasks, tasks.length + 1]);
  };

  const handleTaskCounter = () => {
    const concluded: any = [];

    tasks.map((task) => {
      if (task.isComplete) {
        concluded.push(task);
      }
    });

    return concluded.length;
  };

  return (
    <Flex w={" 736px"} h={"527px"} flexDirection={"column"} marginTop={"64px"}>
      <Flex justifyContent={"space-between"} w={" 736px"} marginBottom={"20px"}>
        <form onSubmit={handleCreateNewTask}>
          <Input
            placeholder="Adicionar uma nova tarefa"
            w={" 500px"}
            bg={"gray.700"}
            _placeholder={{ color: "gray" }}
            color={"white"}
            name="task"
          />
          <Button rightIcon={<AddIcon />} colorScheme={"gray"} variant="solid">
            Criar
          </Button>
        </form>
      </Flex>

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
          return (
            <CardTask
              key={task.id}
              title={task.title}
              isComplete={task.isComplete}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
