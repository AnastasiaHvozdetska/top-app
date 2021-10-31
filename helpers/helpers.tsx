import CoursesIcon from './Menu/icons/courses.svg';
import ServicesIcon from './Menu/icons/services.svg';
import BooksIcon from './Menu/icons/books.svg';
import ProductIcon from './Menu/icons/product.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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