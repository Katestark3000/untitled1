import {useEffect, useState} from "react";
import CommentList from "./list";
import Input from "./my-input"
import MySelect from "./my-select";

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

export default function App() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [search, setSearch] = useState("");
    const [selectOps, setSelectOps] = useState("");

    const removeComment = (comment: Comment) => {
        setComments(prev =>
            prev.filter(c => c.id !== comment.id)
        );
    };

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch("/comments.json");
            const data = await res.json();
            setComments(data);
        };

        void fetchComments();
    }, []);

    const sortOptions = [
        {value: 'name-asc', name: 'По имени (А-z)'},
        {value: 'name-desc', name: 'По имени (Z-a)'},

        {value: 'email-asc', name: 'По почте (А-z)'},
        {value: 'email-desc', name: 'По почте (Z-a)'},

        {value: 'body-asc', name: 'По описанию (А-z)'},
        {value: 'body-desc', name: 'По описанию (Z-a)'},
    ]

    const filterComment = comments
        .filter(comment =>
            comment.name.toLowerCase().includes(search.toLowerCase())
            || comment.body.toLowerCase().includes(search.toLowerCase())
        )
        .toSorted((a, b) => {
                if (!selectOps) return;
                const [field, order] = selectOps.split('-')

                const result = a[field]?.localeCompare(b[field])

                return order === 'asc' ? result : -result
            }
        )

    return (
        <>
            <h1>Список комментариев</h1>
            <Input value={search} onChange={setSearch}/>
            <MySelect value={selectOps} selectedOptions={sortOptions}
                      onChange={(value) => setSelectOps(value)}
            />
            <CommentList
                comments={filterComment}
                onRemove={removeComment}
            />
        </>
    );
}