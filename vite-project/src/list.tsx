import CommentItem from "./items";

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

type CommentListProps = {
    comments: Comment[];
    onRemove: (comment: Comment) => void;
}

export default function CommentList(
    { comments, onRemove } : CommentListProps) {
    return (
        <>
            {comments.map(comment => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    onRemove={onRemove}
                />
            ))}
        </>
    );
}
