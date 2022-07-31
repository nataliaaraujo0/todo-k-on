export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  OnDeleteTask: (idToDelete: string) => void;
}
