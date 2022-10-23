import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroCard, getHeroesByName } from ".."
import { useForm } from "../../hooks/useForm"

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);
    const showSearch = q === "";
    const showError = heroes.length === 0 && !showSearch;

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText.toLowerCase().trim()}`);
    };

    return (
        <>
            <div className="row mt-3">
                <div className="col-5 ">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={onInputChange}
                            autoComplete="off"
                        />
                        <button className="btn btn-outline-primary mt-2">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                    <div
                        className="alert alert-primary"
                        style={{ display: showSearch ? "" : "none" }}
                    >
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger"
                        style={{ display: showError ? "" : "none" }}
                    >
                        No hero with <b>{q}</b>
                    </div>
                    {
                        heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)
                    }
                </div>
            </div>
        </>
    )
}
