import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { TaskProps } from "./task.interface";
import styles from "./task.module.scss";

export function CardTask({ title, isComplete }: TaskProps) {
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
    >
      <Checkbox
        colorScheme={"purple"}
        borderColor={"purple.300"}
        className={styles.checkbox}
        isChecked={isComplete}
      />

      <Text maxWidth={"600px"} color={"white"}>
        {title}
      </Text>

      <DeleteIcon
        cursor={"pointer"}
        color={"blue.200"}
        _hover={{ color: "#e96e74" }}
      />
    </Flex>
  );
}
