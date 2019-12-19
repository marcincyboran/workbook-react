import React from 'react';
import './OfferDetails.scss';

const OfferDetailPage: React.FC = () => {
    return (
        <section className="offerDetail" data-id="${offerDetail.id}">
            <div className="offerDetail__top">
                <h2 className="heading-primary offerDetail__top-title">Title</h2>
            </div>
            <div className="gallery">
                <img src="" alt="gallery photo 1" className="gallery-item" />
                <img src="" alt="gallery photo 2" className="gallery-item" />
                <img src="" alt="gallery photo 3" className="gallery-item" />
                <img src="" alt="gallery photo 4" className="gallery-item" />
            </div>
            <div className="offerDetail__content">
                <div className="offerDetail__description">
                    <h3 className="heading-secondary u-mb-medium">Opis:</h3>
                    <p className="offerDetail__description-text u-mb-big">Text</p>
                    <p className="offerDetail__description-text u-mb-huge">TextDetails</p>
                    <a href="#TODO_NAVLINK" className="button button--primary button--icon button--big">
                        <span>Złóż ofertę</span>
                        <svg className="icon">
                            <use href="./assets/svgs/sprite.svg#icon-plus"></use>
                        </svg>
                    </a>
                </div>
                <aside className="offerDetail__sidebar">
                    <h3 className="heading-secondary u-mb-medium">Kontakt:</h3>
                    <ul className="u-list u-mb-big">
                        <li className="u-list__item u-list__item--normal">
                            <svg className="icon icon--normal icon--secondary">
                                <use href="./assets/svgs/sprite.svg#icon-user"></use>
                            </svg>
                            Name
                        </li>
                        <li className="u-list__item u-list__item--normal">
                            <svg className="icon icon--normal icon--secondary">
                                <use href="./assets/svgs/sprite.svg#icon-old-phone"></use>
                            </svg>
                            Tel
                        </li>
                        <li className="u-list__item u-list__item--normal">
                            <svg className="icon icon--normal icon--secondary">
                                <use href="./assets/svgs/sprite.svg#icon-email"></use>
                            </svg>
                            Mail
                        </li>
                        <li className="u-list__item u-list__item--normal">
                            <svg className="icon icon--normal icon--secondary">
                                <use href="./assets/svgs/sprite.svg#icon-facebook"></use>
                            </svg>
                            <a href="https://www.facebook.com/${offerDetail.details.fb}" target="_blank">
                                Profil
                            </a>
                        </li>
                    </ul>
                    <h3 className="heading-secondary u-mb-medium">Lokalizacja:</h3>
                    <ul className="u-list u-mb-big">
                        <li className="u-list__item u-list__item--normal">
                            <svg className="icon icon--normal icon--secondary">
                                <use href="./assets/svgs/sprite.svg#icon-location-pin"></use>
                            </svg>
                            <a href="https://www.google.com/maps?q=${offerDetail.location}" target="_blank">
                                Bogatynia
                            </a>
                        </li>
                    </ul>
                    <iframe
                        className="offerDetail__map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320513.1439457553!2d16.71168578074838!3d51.126743182413364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1sen!2spl!4v1551616973081"
                        style={{ border: 0 }}
                    />
                </aside>
            </div>
        </section>
    );
};

export default OfferDetailPage;
