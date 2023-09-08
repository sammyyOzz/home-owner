import { Icon } from "@chakra-ui/react";

function SearchIcon({ ...props }: any) {
  return (
    <Icon viewBox="0 0 19 19" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.19231 15.6092C11.979 15.6092 15.0487 12.5395 15.0487 8.75286C15.0487 4.96619 11.979 1.89648 8.19231 1.89648C4.40564 1.89648 1.33594 4.96619 1.33594 8.75286C1.33594 12.5395 4.40564 15.6092 8.19231 15.6092Z"
        stroke="white"
        stroke-width="2.09328"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8939 13.4553L17.2034 17.7648"
        stroke="white"
        stroke-width="2.09328"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
}

export default SearchIcon;
