declare interface signInProps {
  email: string;
  password: string;
}

declare interface primaryButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  [key: string]: unknown; // to allow any additional props like disabled, etc.
}
