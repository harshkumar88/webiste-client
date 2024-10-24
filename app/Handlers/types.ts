interface ButtonType {
  btn_type: "submit" | "reset" | "button"; // Specific acceptable button types
  content: string;
  callbackfn: () => {};
  //   callBackFn: () => Promise<{ message: string }>;
}

export type { ButtonType };
