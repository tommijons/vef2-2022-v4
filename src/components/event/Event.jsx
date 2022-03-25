import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Event.module.scss';

const apiUrl = 'https:vef2-20222-v3-synilausn.herokuapp.com/events/';

Event.propTypes = {
    id: propTypes.string.isRequired,
    eventUrl: propTypes.string,
    limit: propTypes.number,
}

export function Event({ id, onDelete, eventUrl, limit = -1}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [eventsItem, setEventsItem] = useState(null);
    //const [registration, setRegistation];

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
          setError(null);
    
          let json;
    
          const url = new URL(id, apiUrl);
    
          try {
            const result = await fetch(url);
    
            if (result.status === 404) {
              return;
            }
    
            if (!result.ok) {
              throw new Error('result not ok');
            }
    
            json = await result.json();
          } catch (e) {
            console.warn('unable to fetch event', e);
            setError('Gat ekki sótt viðburð.');
            return;
          } finally {
            setLoading(false);
          }
    
          setEventsItem(json);
        }
        fetchData();
      }, [id]);
    
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
      <section className={s.event}>
        <h2 className={s.event__title}>{eventsItem && eventsItem.name}</h2>
        <p>
            {eventsItem && eventsItem.description}
        </p>
        <div className={s.event__links}>
          {eventUrl && (
            <Link className={s.event__link} to={eventUrl}>Nánar</Link>
          )}
  
          {!eventUrl && (
            <Link className={s.event__link} to="/">Til baka</Link>
          )}
        </div>
      </section>
        
    )
}