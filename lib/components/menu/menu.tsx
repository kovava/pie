import { getPages } from "@/lib/strapi";
import styles from "./menu.module.scss";

interface IOwnProps {
    currentRoute: string;
}

const Menu = async (props: IOwnProps) => {
    const pages = await getPages();
    const { currentRoute } = props;
    
    return (
        <nav className={styles.root}>
          <ul>
            {pages.map((page) => (
              <li key={page.id} className={currentRoute === page.slug ? styles.active : ""}>
                <a href={`/${page.slug}`}>
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
    );
}

export default Menu;