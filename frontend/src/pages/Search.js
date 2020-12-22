import React from "react";
import { useState, useEffect } from "react";

function Search() {
 
    const [search, setSearch] = useState([]);

    const getSearch = () => {
      fetch("http://localhost:4000/search")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearch(data);
        });
    };
    useEffect(() => {
      getSearch();
      console.log(search);
    }, []);
    return (
     <div>
 
 
        <div class="form-container">
          <h2 className="register-form-title">Recherche</h2>
          <form onSubmit={getSearch}>
            <input
              type="search"
              className="form-control"
              placeholder="Recherche ... "
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
