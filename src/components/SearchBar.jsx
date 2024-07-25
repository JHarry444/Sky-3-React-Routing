import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const SearchBar = ({ searchFunc, searchTerm, setSearchTerm }) => {
    return (
        <Form onSubmit={searchFunc}>
            <InputGroup>
                <FormControl onChange={e => setSearchTerm(e.target.value)} value={searchTerm}
                    placeholder="Enter search term here"
                />
            </InputGroup>
        </Form>
    );
}

export default SearchBar;