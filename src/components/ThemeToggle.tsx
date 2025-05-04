import { ActionIcon } from "@mantine/core";

interface Props {
  toggleColorScheme: () => void;
  colorScheme: "light" | "dark";
}

export const ThemeToggle = ({ toggleColorScheme, colorScheme }: Props) => {
  return (
    <ActionIcon variant="outline" onClick={toggleColorScheme}>
      {colorScheme === "dark" ? "🌙" : "☀️"}
    </ActionIcon>
  );
};
