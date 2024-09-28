export interface PanelProgressBarProps {
  progressItems: ProgressItemProps[];
  className?: string;
}

export enum ActionType {
  SUBMIT = "submit",
  NEXT = "next",
  PREVIOUS = "previous",
  START = "start"
}

export interface ProgressItemProps {
  question: string;
  id: string,

  actions: ActionType[],
  completedColor: {
    from: `from-[${string}]`;
    to: `to-[${string}]`;
  };
  component: (options: OnboardingComponentProps) => React.ReactNode;
  status: "completed" | "incomplete" | "current";
}

export interface OnboardingComponentProps {
  data: string;
  progressItem: ProgressItemProps;
  formData: FormData;
  nextData: { id: string; data: string };
  previousData: { id: string; data: string };
  handleFormData: (data: string) => string;
}


export interface OnboardingResultOptions {
  key: string;
  value: string;
}

export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
}