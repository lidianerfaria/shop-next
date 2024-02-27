import { useRouter } from 'next/router';

const ProductPage = () => {
  const { query } = useRouter();

  return <h1>Product Page: {JSON.stringify(query)}</h1>;
};

export default ProductPage;
