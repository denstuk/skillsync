import * as Select from "@radix-ui/react-select";
import { FC } from "react";
import "./Combobox.css";

type ComboboxProps = {
  readonly options: string[];
  readonly onSelect: (option: string) => void;
};

export const Combobox: FC<ComboboxProps> = ({ options, onSelect }: ComboboxProps) => {
  return (
    <Select.Root onValueChange={onSelect}>
      <Select.Trigger className="SelectTrigger">
        <Select.Value placeholder="Select an option" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Content className="SelectContent">
        <Select.Viewport>
          {options.map((option) => (
            <Select.Item key={option} value={option} className="SelectItem">
              <Select.ItemText>{option}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};
