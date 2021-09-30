import { Htag, Button, Paragraph, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">some text</Htag>
      <Button appearance="primary" arrow="down">button primary</Button>
      <Button appearance="ghost" arrow="right">button ghost</Button>

      <Paragraph size="s">Paragraph 1</Paragraph>
      <Paragraph size="m">Paragraph 2</Paragraph>
      <Paragraph size="l">Paragraph 3</Paragraph>
      <Tag color="green" size="s">Paragraph 3</Tag>
      <Tag color="red" size="m">Paragraph 3</Tag>
    </>
  );
}
