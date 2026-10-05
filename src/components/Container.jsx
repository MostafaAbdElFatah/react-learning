export function Container(props) {
  return (
    // Max-width container
    <div className="mx-auto max-w-5xl p-4 md:p-8">{props.children}</div>
  );
}


