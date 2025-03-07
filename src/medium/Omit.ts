type MyOmit<T extends {}, K extends string> = {
  [A in Exclude<keyof T, K>]: T[A];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

export {};
