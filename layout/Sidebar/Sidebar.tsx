import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import cn from 'classnames';
import styles from './SidebarProps.module.css';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};