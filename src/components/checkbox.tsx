"use client";
import { useState } from "react";
import { Checkbox, Field, Label } from "@headlessui/react";

type Props = {
  children: React.ReactNode;
};

export function Check(props: Props) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Field className="flex items-center gap-1 flex-shrink-0">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="border-gray-500 group block size-4 rounded border-2 bg-white data-[checked]:bg-blue-500"
      >
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <Label>{props.children}</Label>
    </Field>
  );
}
