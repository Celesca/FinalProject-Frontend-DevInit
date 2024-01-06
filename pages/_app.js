import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Head from "next/head";
import { EventProvider } from "@/contexts/EventContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Era Planner - Manage your life</title>
        <meta
          name="description"
          content="Era Planner is the personal manager web application created by Celescadev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css" />

      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      <EventProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EventProvider>
    </>
  );
}
