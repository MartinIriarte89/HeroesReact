import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();
    const hero = useMemo(() => getHeroById(id), [id]);
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    if (!hero) return <Navigate to="/marvel" />

    return (
        <div className="row mt-5">
            <div className="col-md-4 col-sm-6 col-8 mx-auto mb-sm-0 mb-2 ">
                <img
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero} />
            </div>
            <div className="col-md-8 col-sm-6 col-12 mb-sm-0 mb-2">
                <div className="row h-100">
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter ego:</b> {hero.alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Publisher:</b> {hero.publisher}
                        </li>
                        <li className="list-group-item">
                            <b>First appearance:</b> {hero.first_appearance}
                        </li>
                        <li className="list-group-item">
                            <h5>Characters</h5>
                            <p>{hero.characters}</p>
                        </li>
                    </ul>
                    <div className="d-flex ">
                        <button
                            className="btn btn-outline-primary align-self-start ms-auto mt-auto"
                            onClick={onNavigateBack}
                        >
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
