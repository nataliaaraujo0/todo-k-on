import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TaskProps } from "./task.interface";
import styles from "./task.module.scss";

export function CardTask({ title, id, OnDeleteTask, isComplete }: TaskProps) {
  const [checked, setChecked] = useState(isComplete);
  const [lineThrough, setLineThrough] = useState("");

  const handleChecked = (event) => {
    setChecked(event.target.isChecked);
    setLineThrough("line-through");
  };
  const handleDeleteTask = () => {
    console.log("Deletar");
    OnDeleteTask(id);
  };

  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      bg={"blue.900"}
      marginTop={"24px"}
      h={" 72px"}
      borderRadius={"8px"}
      _hover={{ background: "blue.700" }}
      transition="800ms"
      textDecoration={lineThrough}
    >
      <Checkbox
        colorScheme={"purple"}
        borderColor={"purple.300"}
        className={styles.checkbox}
        isChecked={checked}
        onChange={handleChecked}
      />

      <Text maxWidth={"600px"} color={"white"}>
        {title}
      </Text>

      <DeleteIcon
        cursor={"pointer"}
        color={"blue.200"}
        _hover={{ color: "#e96e74" }}
        onClick={handleDeleteTask}
      />
    </Flex>
  );
}
