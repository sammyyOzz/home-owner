import { Select as ChakraSelect } from "@chakra-ui/react";

export interface SelectProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  [props: string]: any;
}

function Select({ children, fullWidth, ...props }: SelectProps) {
  return (
    <ChakraSelect
      variant="filled"
      size="sm"
      bg="#EBEEF1"
      color="#000000CC"
      w={fullWidth ? "100%" : "fit-content"}
      borderRadius="8px"
      {...props}
    >
      {children}
    </ChakraSelect>
  );
}

export default Select;
