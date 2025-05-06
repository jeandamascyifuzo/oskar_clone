declare interface signInProps {
  email: string;
  password: string;
}

declare interface primaryButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  [key: string]: unknown;
}

declare interface TabItem {
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

declare interface TabsProps {
  tabs: TabItem[];
  activeIndex: number;
  handleTabChange: (index: number) => void;
}

declare interface HowBusinessType {
  id?: number;
  title: string;
  subTitle: string;
  content: string;
  icon: string;
}

declare interface buildDataType {
  id: number;
  percentage: string;
  name: string;
}
