import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment:(comment: string) => void;
}

export function Comment( { content, onDeleteComment }: CommentProps ) {
    const[likeCount, setLikeCount] = useState(0);

   function handleDeleteComment () {
    console.log('deletar')
    onDeleteComment(content);
   }
   
   function handleLikeComment() {
    setLikeCount ((state) => {
        return state + 1
    });
    }

    return (
        <div className={styles.comment}>
          <Avatar 
            hasBorder={false} 
            src="https://www.reviewbox.com.br/wp-content/uploads/2019/04/homem-sentado-em-mesa-e1554338156289.jpg" 
            alt="" 
        />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
             <header>
                <div className={styles.authorAndTime}>
                    <strong>Carlos Siqueira</strong>
                    <time title="04 de Julho às 09:37h" dateTime="2023-07-04 09:37:02">Cerca de 1h atrás</time>
                </div>

                <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24} />
                </button>
             </header>

             <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp /> 
                 Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
          </div>
        </div>
    )
}