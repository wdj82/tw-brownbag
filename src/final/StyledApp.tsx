import { posts } from "../posts";
import "./app.css";

function PlainApp() {
  return (
    <div className="wrapper">
      <header>
        <h1 className="header-title">Header</h1>
        <nav>
          <ul className="header-wrapper">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content-wrapper">
        <aside>
          <div className="sidebar">
            <h2>Posts</h2>
            <nav>
              <ul className="sidebar-items">
                <li>
                  <a href="#">Post 1</a>
                </li>
                <li>
                  <a href="#">Post 2</a>
                </li>
                <li>
                  <a href="#">Post 3</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="post-wrapper">
          <div className="posts">
            {posts.map((post) => (
              <section key={post.id}>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-text">{post.text}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default PlainApp;
