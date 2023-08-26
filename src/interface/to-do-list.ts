export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    toggleToDo?: (id: string, completed: boolean) => Todo;
    deleteToDo?: (id: string) => Todo
}