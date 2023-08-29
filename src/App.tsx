import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from'./App.module.css';
import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String


const posts: PostType[] = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/jeanlucasc.png',
      name: 'Jean Lucas',
      role: 'DEV Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Esse é o meu primeiro projeto usando ReactJs, espero que gostem!! 🚀' },
      { type: 'link', content: '👉 https://github.com/jeanlucasc' },
    ],
    publishedAt: new Date('2023-08-09 21:37:00')
  }, 
  {
    id: 2, 
    author: {
      avatarUrl: 'https://www.reviewbox.com.br/wp-content/uploads/2019/04/homem-sentado-em-mesa-e1554338156289.jpg',
      name: 'Carlos Siqueira',
      role: 'DEV Full-Stack'
    },
    content: [
      { type: 'paragraph', content: '👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat O nome do projeto é DoctorCare.' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-07 20:00:00')
  }, 
];


export function App() {
  return (
    <div>
     <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}