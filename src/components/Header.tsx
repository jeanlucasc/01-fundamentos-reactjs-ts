import styles from './Header.module.css'

import reactLogo from'../assets/react.svg';


export function Header() {
return(
<header className={styles.header}>
  <img src={reactLogo} alt="Logo React" />
</header>
);
}