export type tErrorState = {
  openDialog: boolean;
  message: string;
  title: string;
};

export const errorState: tErrorState = {
  openDialog: false,
  message: "",
  title: "",
};
