export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  OnDeleteTask: (idToDelete: string) => void;
  task: { id: string; title: string; isComplete: boolean };
  updateTask: (task: {
    id: string;
    title: string;
    isComplete: boolean;
  }) => void;
}
