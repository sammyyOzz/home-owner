import { GridItem, Input, Text } from "@chakra-ui/react";

export interface FormControlProps {
  half?: boolean;
  isRequired?: boolean;
  label: string;
  type?: string;
}

function FormControl({ half, isRequired, label, type = "text" }: FormControlProps) {
  return (
    <GridItem colSpan={half ? [12, null, 6] : 12}>
      <Text fontSize="sm" color="#000000CC" mb={3}>{`${label}${isRequired ? "*" : ""}`}</Text>
      <Input
        type={type}
        bg="#F7F7F7"
        borderRadius="30px"
        h={["35px", null, "45px"]}
        fontSize="sm"
      />
    </GridItem>
  );
}

export default FormControl;
