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
        {search
          .filter((titre) => titre.includes("pas encore"))
          .map((s, index) => {
            return (
              <div key={index}>
                {s._id} {s.titre}
              </div>
            );
          })}
      </div>
    );
}
export default Search;
