import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Group, Burger } from "@mantine/core";
import { ThemeToggle } from "./ThemeToggle";
import { useAuthStore } from "../hooks/useAuthStore";
import { useState } from "react";

interface AppHeaderProps {
  toggleColorScheme: () => void;
  colorScheme: "light" | "dark";
}

export const AppHeader = ({
  toggleColorScheme,
  colorScheme
}: AppHeaderProps) => {
  const [opened, setOpened] = useState(false);
  const { token, setToken } = useAuthStore();
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <header style={{ padding: "1rem 0", borderBottom: "1px solid #ccc" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Group>
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "none"
            }}
          >
            Tyusha App
          </Link>
        </Group>
        <Group>
          <ThemeToggle
            toggleColorScheme={toggleColorScheme}
            colorScheme={colorScheme}
          />
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            hiddenFrom="sm"
          />
          <Group visibleFrom="sm">
            {token ? (
              <Button variant="outline" onClick={logout}>
                Вийти
              </Button>
            ) : (
              <>
                <Button variant="outline" component={Link} to="/login">
                  Увійти
                </Button>
                <Button component={Link} to="/register">
                  Реєстрація
                </Button>
              </>
            )}
          </Group>
        </Group>
      </Container>
    </header>
  );
};
