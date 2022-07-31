import { Flex, Input, Button } from "@chakra-ui/react";
import { Info } from "../Info";
import { CardTask } from "../CardTask";
import { v4 as uuidv4 } from "uuid";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
interface TaskListProps {
  id: string;
}
export function TasksList({ id }: TaskListProps) {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Pedir pizza", isComplete: true },
    {
      id: uuidv4(),
      title: "Começar no temporada de Boku No Hero",
      isComplete: false,
    },
  ]);
  console.log(tasks);

  const [newTaskText, setNewTaskText] = useState("");

  function deleteTask(id: string) {
    alert(`Deletar task' ${id}`);
  }

  const handleNewTaskChange = () => {
    setNewTaskText(event.target.value);
  };

  const handleCreateNewTask = () => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: newTaskText,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
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
            w={" 500px"}
            bg={"gray.700"}
            color={"white"}
            _placeholder={{ color: "gray" }}
            placeholder="Adicionar uma nova tarefa"
            name="task"
            value={newTaskText}
            onChange={handleNewTaskChange}
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
              OnDeleteTask={deleteTask}
              id={task.id}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
