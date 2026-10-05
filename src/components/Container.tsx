import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container(props: ContainerProps) {
  return (
    // Max-width container
    <div className="mx-auto max-w-5xl p-4 md:p-8">{props.children}</div>
  );
}


