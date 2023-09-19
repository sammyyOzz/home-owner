import { GridItem, Text, Textarea } from "@chakra-ui/react";

export interface TextAreaProps {
  half?: boolean;
  isRequired?: boolean;
  label: string;
}

function TextAreaFormControl({ half, label, isRequired }: TextAreaProps) {
  return (
    <GridItem colSpan={half ? 6 : 12}>
      <Text fontSize="sm" color="#000000CC" mb={3}>{`${label}${isRequired ? "*" : ""}`}</Text>
      <Textarea bg="#F7F7F7" borderRadius="7px" h="150px" fontSize="sm"></Textarea>
    </GridItem>
  );
}

export default TextAreaFormControl;
