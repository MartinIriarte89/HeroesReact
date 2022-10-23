import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {

    const { id, superhero, alter_ego, characters, first_appearance } = hero;
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card">
                <div className="row g-0">
                    <div className="col-4 animate__animated animate__fadeIn">
                        <img
                            className="card-img"
                            src={heroImageUrl}
                            alt={superhero}
                        />
                    </div>
                    <div className="col-8">
                        <div class="card-body">
                            <h5 class="card-title text-center">{superhero}</h5>
                            <p class="card-text">{alter_ego}</p>
                            <p>{characters !== alter_ego && characters}</p>
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`} className="text-dark">
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
