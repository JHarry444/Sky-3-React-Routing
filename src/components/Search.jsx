import { useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';

const Search = () => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [films, setFilms] = useState([]);
    const [error, setError] = useState("");


    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=335035be&s=${searchTerm}`);
            if (response.data.Error) {
                setError(response.data.Error);
            } else {
                setFilms(response.data.Search)
                setError("");
            }
        } catch (err) {
            console.error(err);
            setError(err);
        }
    }

    const getDetails = (id) => {
        console.log(id);
        navigate(`/details/${id}`);
    }


    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFunc={handleSearch} />
            {error ?
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                    <Alert.Heading>{error}</Alert.Heading>
                </Alert> : <SearchResults films={films} getDetails={getDetails} />
            }
        </div>)


}

export default Search;