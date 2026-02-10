"""A tiny hello-world example."""


def greet(name: str) -> str:
    """Return a friendly greeting message."""
    return f"안녕하세요, {name}!"


if __name__ == "__main__":
    print(greet("세계"))
