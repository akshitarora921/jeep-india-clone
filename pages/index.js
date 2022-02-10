import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeep India Clone</title>
        <meta name='description' content='Assignment for an interview' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-4xl text-center p-3 bg-black text-white font-extrabold'>
          Jeep
        </h1>
      </main>
    </div>
  );
}
