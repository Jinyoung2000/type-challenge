type GetReadonlyKeys<T> = {
  [K in keyof T]: T[K] extends Readonly<T[K]> ? K : never;
}[keyof T];

interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"

export {};
