declare module "react-dropdown" {
  import * as React from "react";
  export interface Option {
    label: string;
    value: string;
    className?: string;
  }
  export interface Group {
    type: "group";
    name: string;
    items: Option[];
  }
  export interface ReactDropdownProps {
    options: (Group | Option | string)[];
    baseClassName?: string;
    className?: string;
    controlClassName?: string;
    placeholderClassName?: string;
    menuClassName?: string;
    arrowClassName?: string;
    arrowClosed?: JSX.Element;
    arrowOpen?: JSX.Element;
    disabled?: boolean;
    onChange?: () => void;
    onFocus?: () => void;
    value?: any;
    placeholder?: string;
  }

  class ReactDropdown extends React.Component<ReactDropdownProps> {
  }

  export default ReactDropdown;
}
