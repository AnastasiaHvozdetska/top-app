import { SidebarProps } from './Sidebar.props';
import { Menu } from '../../helpers/Menu/Menu';
import cn from 'classnames';
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo} />

            <Menu />
        </div>
    );
};