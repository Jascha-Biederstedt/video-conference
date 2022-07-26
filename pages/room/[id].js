import React from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

export const getServerSideProps = async context => {
  // need this or the router query data is not available client-side
  // see https://nextjs.org/docs/api-reference/next/router#router-object
  return {
    props: {},
  };
};

const Room = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Script
        src='https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js'
        onLoad={() => {
          console.log(Peer);
        }}
      />

      <h1
        className='mt-20 text-center text-3xl uppercase 
					font-black'
      >
        Room
      </h1>
    </>
  );
};

export default Room;
