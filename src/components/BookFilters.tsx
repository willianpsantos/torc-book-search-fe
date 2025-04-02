import { useSearchBooksQuery } from "../queries/useSearchBooksQuery";
import { Box, Button, TextField } from "@mui/material";

export const BookFilters = () => {
    const {
        title,
        category,
        isbn,
        firstname,
        lastname,
        
        setTitle,
        setCategory, 
        setIsbn, 
        setFirstname,
        setLastname,
        handleSearch,
    } = useSearchBooksQuery();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ display: 'flex', gap: 2 }}>
            <TextField label="Title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField label="Category" defaultValue={category} onChange={(e) => setCategory(e.target.value)} />
            <TextField label="ISBN" defaultValue={isbn} onChange={(e) => setIsbn(e.target.value)} />
        </div>

        <div style={{ display: 'flex', gap: 2 }}>
            <TextField label="First name" defaultValue={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <TextField label="Last name" defaultValue={lastname} onChange={(e) => setLastname(e.target.value)} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </div>
    </Box>
  );
}