import { CommentsComponent } from "../comments/comments.component";

export interface ItemViewModel{
    id: number,
    name: string,
    showDeleteBtn : boolean, 
    comments: string[];
}