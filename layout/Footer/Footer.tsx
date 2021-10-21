import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns'
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} All rights reserved</div>

            <a href="#" target="_blank">User agreement</a>
            <a href="#" target="_blank">Privacy Policy</a>
        </footer>
    );
};