import { posts } from "./posts";

function TailwindApp() {
  return (
    <div>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
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
      <div>
        <aside>
          <div>
            <h2>Posts</h2>
            <nav>
              <ul>
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
        <main>
          <div>
            {posts.map((post) => (
              <section key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default TailwindApp;
