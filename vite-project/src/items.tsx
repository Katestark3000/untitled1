import Buttons from "./my-button"

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

type CommentItemProps = {
    comment: Comment;
    onRemove: (comment: Comment) => void;
}

export default function CommentItem({ comment, onRemove }: CommentItemProps) {
    const removeCom = () => {
        onRemove(comment)
    }
    return (
        <div className="comment">
            <div className="comment-body">
                <div className="row">
                    <div><strong> Имя: {comment.name}</strong></div>
                    <div>Почта: {comment.email}</div>
                </div>

                <div>{comment.body}</div>
                <Buttons className="btn-red" text="Удалить" onClick={removeCom}/>
            </div>

        </div>
    )}
