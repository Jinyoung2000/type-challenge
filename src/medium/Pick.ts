type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

/** 테스트 케이스 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

export {};
