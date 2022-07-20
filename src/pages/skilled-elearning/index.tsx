import Head from 'next/head';

import { Meta } from '@/layouts/Meta';

import SkilledLayout from './layout';

const SKilledElearning = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Meta title="Skilled" description="skilled e-learning landing page" />
    <SkilledLayout></SkilledLayout>
  </div>
);

export default SKilledElearning;
