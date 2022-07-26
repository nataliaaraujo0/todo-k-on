import { Header } from "./components/Header";

import "../styles/global.scss";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Header />
      <Flex
        maxWidth={"70rem"}
        margin={"2rem auto"}
        padding={"0 1rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gridTemplateColumns={"1fr"}
      >
        <NewTask />
        <TasksList />
      </Flex>
    </>
  );
}

export default App;
