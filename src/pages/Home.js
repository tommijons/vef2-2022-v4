import React from 'react';
import { Events } from '../components/events/Events';

export function Home() {
  return (
    <section> 
      <h1>Viðburðir á næstunni</h1>
      <Events />
    </section>  
  );
}