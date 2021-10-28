import cn from 'classnames';
import { format } from 'date-fns'
import { useContext } from 'react';
import Link from 'next/link'
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import styles from './Menu.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Courses',
        icon: <CoursesIcon />,
        id: TopLevelCategory.Courses
    },
    {
        route: 'services',
        name: 'Services',
        icon: <ServicesIcon />,
        id: TopLevelCategory.Services
    },
    {
        route: 'books',
        name: 'Books',
        icon: <BooksIcon />,
        id: TopLevelCategory.Books
    },
    {
        route: 'products',
        name: 'Products',
        icon: <ProductIcon />,
        id: TopLevelCategory.Products
    },
]

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
			return (
					<>
							{firstLevelMenu.map(m => (
								<div key={m.route}>
									<Link href={`/${m.route}`}>
										<div className={cn(styles.firstLevel, {
											[styles.firstLevelActive]: m.id === firstCategory
										})}>
											{m.icon}
											<span>{m.name}</span>
										</div>
									</Link>
									{m.id === firstCategory && buildSecondLevel(m)}
								</div>
							))}
					</>
			);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>
							{m._id.secondCategory}
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};
	
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link href={`/${route}/${p.alias}`} key={p._id}>
				<a className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
				</Link>
			))
		);
	};

	return (
			<div className={styles.menu}>
					{buildFirstLevel()}
			</div>
	);
};