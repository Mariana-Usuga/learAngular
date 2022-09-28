export enum Levels {
  "Info",
  "Unrgent",
  "Blocking"
}

export interface ITask {
  title: string;
  description?: string;
  completed: boolean;
  level: Levels
} 