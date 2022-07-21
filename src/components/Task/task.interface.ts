export type Task = {
  title: string;
  complete?: boolean;
};
export interface TaskProps {
  id?: number;
  task: Task;
}
