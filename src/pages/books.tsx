import { Table } from '../components/Table';
import { BookFilters } from '../components/BookFilters';
import { columns } from '../components/BooksTableColumnsDefs';
import { useSearchBooksQuery } from '../queries/useSearchBooksQuery';

export const BooksPage = () => {
    const { 
        data, 
        isPending, 
        page, 
        take,
        handlePageChange
    } = useSearchBooksQuery();


    return (
        <span>
            <h1>Books</h1>
            <p>Search for books in the library</p>
            <p>Use the filters to narrow down your search</p>
            
            <div className="card">
                <BookFilters></BookFilters>
            </div>

            <div className="card">
                <Table 
                    columns={columns}
                    loading={isPending}
                    rows={data?.books}
                    rowsCount={data?.count}
                    page={page}
                    take={take}
                    onPageChange={handlePageChange}>
                </Table>
            </div>
        </span>
    );
}