import { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({menu, firstCategory}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  console.log(menu, 'menu');
  return (
    <>
      <Htag tag="h1">some text</Htag>
      <Button appearance="primary" arrow="down">Кнопка</Button>
      <Button appearance="ghost" arrow="right">button ghost</Button>

      <Paragraph size="s">Paragraph 1</Paragraph>
      <Paragraph size="m">Paragraph 2</Paragraph>
      <Paragraph size="l">Paragraph 3</Paragraph>
      <Tag color="green" size="s">Paragraph 3</Tag>
      <Tag color="red" size="m">Paragraph 3</Tag>

      <Rating isEditable rating={rating} setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });


  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}