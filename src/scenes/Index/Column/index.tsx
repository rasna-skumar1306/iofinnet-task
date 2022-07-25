import type { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = { children?: ReactNode; clsName?: string };

export function Column({ children, clsName }: Props) {
  return <div className={`${styles.container} ${clsName}`}>{children}</div>;
}
