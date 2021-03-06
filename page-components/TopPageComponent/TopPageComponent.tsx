import cn from 'classnames';
import { Htag, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <>
          <div className={styles.title}>
            <Htag tag='h1'>{page.title}</Htag>
            {products && <Tag color="grey" size="m" >{products.length}</Tag>}
            <span>Sort</span>
          </div>
          {products && products.length}
        </>
    );
};