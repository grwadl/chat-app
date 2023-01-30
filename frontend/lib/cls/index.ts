export function cls(classnames: (string | undefined)[]) {
  const truthyClasses = classnames.filter((cl) => !!cl);
  return truthyClasses.join(" ").trim();
}
