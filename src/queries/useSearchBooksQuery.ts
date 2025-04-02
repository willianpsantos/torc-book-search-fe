import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useSearchBooksQuery = () => {
    const [page, setPage] = useState(0);
    const [take, setTake] = useState(10);
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [category, setCategory] = useState<string | undefined>(undefined);
    const [isbn, setIsbn] = useState<string | undefined>(undefined);
    const [firstname, setFirstname] = useState<string | undefined>(undefined);
    const [lastname, setLastname] = useState<string | undefined>(undefined);

    const query = useQuery({
        queryKey: ["books"],
        staleTime: 1000,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,

        queryFn: async () => {

            const params = new URLSearchParams({
                Page: (page + 1).toString(),
                Take: take.toString(),
                "Query.Title": title || "",
                "Query.Category": category || "",
                "Query.ISBN": isbn || "",
                "Query.Firstname": firstname || "",
                "Query.Lastname": lastname || ""
            });

            const response = await fetch(import.meta.env.VITE_API_URL + '/Books?' + params.toString(), {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return response.json();
        },
    });

    const handleSearch = async () => {
        setPage(0);
        await query.refetch();
    }

    const handlePageChange = async (page: number, take: number) => {
        setPage(page);
        setTake(take);
        await query.refetch();
    }

    return {
        page,
        take,
        title,
        category,
        isbn,
        firstname,
        lastname,

        setPage,
        setTake,
        setTitle,
        setCategory,
        setIsbn,
        setFirstname,
        setLastname,

        handleSearch,
        handlePageChange,

        ...query,
    };
}