import React from 'react';

type WelcomeProps = {};

export default ({}: WelcomeProps) => (
    <main className='container'>
        <section id='welcome-visitor'>
            <h2>For Visitors</h2>
            <p>
                Tanto bastu förening is a members-driven non-profit association
                that maintains and runs our Sauna located by the Tantolunden
                park. To be able to book sauna sessions you need to become a
                member, but a few times a week we provides opportunities for the
                public to visit the sauna on a drop-in, first-come, first-served
                basis.
            </p>

            <h3>Open for the public</h3>

            <p>
                We have certain dedicated time slots for sauna sessions that are
                open to the public, however, a member needs to volunteer to host
                a session for it to happen. To know if a member has volunteered
                to host a session, you need to check our facebook group for an
                event at that date.
            </p>

            <hgroup>
                    <h2>Public schedule as of 20/12 2021</h2>
                    <small>
                                    Sometimes we also offer public sessions at
                                    other time slots, it will be communicated
                                    through events created in our facebook
                                    group.
                                </small>                
                                </hgroup>
                <table>
                    <thead>
                        <tr>
                            <td>Weekday</td>
                            <td>Time</td>
                            <td>Open for</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tuesday</td>
                            <td>7.00pm-8.30pm</td>
                            <td>Mens sauna</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>7.00pm-8.30pm</td>
                            <td>Mix Sauna</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>7.00pm-8.30pm</td>
                            <td>Womens sauna</td>
                        </tr>
                    </tbody>
                </table>

            <h3>Heading 3</h3>
            <p>
                Integer bibendum malesuada libero vel eleifend. Fusce iaculis
                turpis ipsum, at efficitur sem scelerisque vel. Aliquam auctor
                diam ut purus cursus fringilla. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <h4>Heading 4</h4>
            <p>
                Cras fermentum velit vitae auctor aliquet. Nunc non congue urna,
                at blandit nibh. Donec ac fermentum felis. Vivamus tincidunt
                arcu ut lacus hendrerit, eget mattis dui finibus.
            </p>
            <h5>Heading 5</h5>
            <p>
                Donec nec egestas nulla. Sed varius placerat felis eu suscipit.
                Mauris maximus ante in consequat luctus. Morbi euismod sagittis
                efficitur. Aenean non eros orci. Vivamus ut diam sem.
            </p>
            <h6>Heading 6</h6>
            <p>
                Ut sed quam non mauris placerat consequat vitae id risus.
                Vestibulum tincidunt nulla ut tortor posuere, vitae malesuada
                tortor molestie. Sed nec interdum dolor. Vestibulum id auctor
                nisi, a efficitur sem. Aliquam sollicitudin efficitur turpis,
                sollicitudin hendrerit ligula semper id. Nunc risus felis,
                egestas eu tristique eget, convallis in velit.
            </p>

            <figure>
                <img
                    src='https://source.unsplash.com/a562ZEFKW8I/2000x1000'
                    alt='Minimal landscape'
                />
                <figcaption>
                    Image from <a href='https://unsplash.com'>unsplash.com</a>
                </figcaption>
            </figure>
        </section>
    </main>
);
