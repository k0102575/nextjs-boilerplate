import HeadMeta from '@/components/HeadMeta';
import { NextPage } from 'next';

const test: NextPage = () => {
  return (
    <main>
      <HeadMeta title="Test Page" description="Test Page description" isCrawling={false} />
      <p>Test Page</p>
    </main>
  );
};

export default test;
