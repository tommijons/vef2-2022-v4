import React, { useEffect, useState } from 'react';
import { Event } from '../event/Event';
import s from './Events.module.scss';

const apiUrl = 'https:vef2-20222-v3-synilausn.herokuapp.com/events/';

export function Events() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            let json;
            try {
                const result = await fetch(apiUrl);

                if (!result.ok) {
                    throw new Error('result not ok');
                }
                 json = await result.json();
            } catch (e) {
                console.warn('unable to fetch events', e);
                setError('Gat ekki sótt viðburði');
                return;
            } finally {
                setLoading(false);
            }
            console.log('json :>> ', json);
            setEvents(json.items);
        }
        fetchData();
    }, []);

    if (error) {
        return (
          <p>Villa kom upp: {error}</p>
        );
      }
    
      if (loading) {
        return (
          <p>Sæki gögn...</p>
        );
      }
    return (        
        <section className={s.events}>
            <div className={s.events__event}>
                {events.map((item, i) => {

                    return (
                    <div key={i} className={s.events__event}>
                        <Event
                        title={item.name}
                        id={item.id}
                        eventUrl={`events/${item.id}`}
                        limit={5}
                        />
                    </div>
                    )
                })}
            </div>
        </section>
    );
}