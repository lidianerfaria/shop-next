import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$main',
});

export default function Home() {
  return <Button>Hello!</Button>;
}
