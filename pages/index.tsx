import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">some text</Htag>
      <Button appearance="primary" arrow="down">button primary</Button>
      <Button appearance="ghost" arrow="right">button ghost</Button>
    </>
  );
}
