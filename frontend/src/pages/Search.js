import React from "react";
import { useState, useEffect } from "react";

function Search() {
 
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const getSearch = () => {
      fetch("http://localhost:4000/search")
        .then((res) => res.json())
      .then((data) => {
        console.log("valeur result " + results);
        setResults(data);
        console.log("valeur search apres setResult" + search);
        console.log("valeur result apres setResult" + results);
      })
    };
    useEffect(() => {
      getSearch();
      console.log(search);
    }, []);
    return (
     <div>
 
       <ul>
        {
          //console.log("affichage de resultat");

          results.length > 0
            ? results
                .filter((titre) => titre.includes(search))
                .map((result) => (
                  <li key={result._id} className="form-control">
                    {result.titre}
                  </li>
                ))
            : ""
        }
      </ul>
 
        <div class="form-container">
          <h2 className="register-form-title">Recherche</h2>
          <form onSubmit={getSearch}>
            <input
              type="search"
              className="form-control"
              placeholder="Recherche ... "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" class="btn btn-primary">
              Rechercher
            </button>
          </form>
        </div>
      </div>
    );
}
export default Search;
