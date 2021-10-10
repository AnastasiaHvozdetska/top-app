import { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
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