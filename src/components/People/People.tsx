import React, { useCallback, useEffect, useState } from 'react';
import { getUsers } from '../../api/users';
import { Person } from '../../types/Person';
import { PersonCard } from '../PersonCard';
import { Button } from '../Button';
import { Loader } from '../Loader';
import './People.scss';

export const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoadingNew, setIsLoadingNew] = useState(false);
  const [nextPageLink, setNextPageLink] = useState<string | null>(null);

  useEffect(() => {
    getUsers('page=1&count=6')
      .then((res) => res.data)
      .then((data) => {
        setPeople(data.users);
        setNextPageLink(data.links.next_url);
        console.log(data);
      })
      .catch((error) => alert(error));
  }, []);

  const loadMoreHandler = useCallback(() => {
    setIsLoadingNew(true);

    const nextPageQuery = nextPageLink?.split('?')[1];

    if (nextPageQuery) {
      getUsers(nextPageQuery)
        .then((res) => res.data)
        .then((data) => {
          setPeople((currentPeople) => [...currentPeople, ...data.users]);
          setNextPageLink(data.links.next_url);
          setIsLoadingNew(false);
        })
        .catch((error) => alert(error));
    }
  }, [nextPageLink]);

  return (
    <section className="people page__people">
      <div className="container">
        <h2 className="people__title">Working with GET request</h2>
        {people.length === 0 ? (
          <Loader />
        ) : (
          <>
            <ul className="people__list">
              {people.map((person) => (
                <li
                  className="people__list-item"
                  key={person.name + person.registration_timestamp}
                >
                  <PersonCard personData={person} />
                </li>
              ))}
            </ul>
            {isLoadingNew && <Loader />}
            {nextPageLink && (
              <div className="people__show-more">
                <Button clickHandler={loadMoreHandler} big={true}>
                  Show more
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
