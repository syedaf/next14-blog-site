import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
// eslint-disable-next-line no-unused-vars
// import { auth } from "@/lib/auth";

const Navbar = async () => {
  // const session = await auth();
  const session = null;

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
