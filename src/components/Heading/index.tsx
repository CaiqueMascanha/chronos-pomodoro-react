import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode // Aceita tudo do REACT
}

export function Heading({ children }: HeadingProps) {

  return <h1 className={styles.heading}>{children}</h1>;
}
