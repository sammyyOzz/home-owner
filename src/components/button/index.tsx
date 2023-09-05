import { Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps {
  fullWidth?: boolean;
}

function Button({ fullWidth, ...props }: any) {
  return (
    <ChakraButton
      bg="primary"
      borderRadius="10px"
      h="35px"
      w={fullWidth ? "100%" : "fit-content"}
      color="#fff"
      fontSize="sm"
      _hover={{
        bg: "",
        borderColor: `${props.borderColor || "primary"}`,
      }}
      {...props}
    />
  );
}

export default Button;
