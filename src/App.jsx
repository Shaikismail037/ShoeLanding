import {Hero,PopularProducts,SupperQuality,Services,SpecialOffers,CustomerReviews,Footer} from "./sections";

import Nav from "./components/nav";


const app = ()=>(
    <main className="relative">
      <Nav />
      <section className=" xl:padding- wide:padding-r padding-bottom"><Hero /></section>
      <section className=""><PopularProducts /></section>
      <section className="padding"><SupperQuality /></section>
      <section className="padding-x py-10"><Services /></section>
      <section className="padding"><SpecialOffers /></section>
      <section className="padding bg-pale-blue" ><CustomerReviews /></section>
      <section className="bg-slate-600 padding-x padding-top"><Footer /></section>   
    </main>
);

export default app;

