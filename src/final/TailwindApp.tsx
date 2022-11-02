import { posts } from "../posts";

export default function TailwindApp() {
  return (
    <div className="p-4 bg-slate-200">
      <header>
        <h1 className="text-3xl text-center pb-4">Header</h1>
        <nav>
          <ul className="flex gap-2 justify-center">
            <li>
              <a href="#" className="bg-blue-400 rounded p-2">
                Page 1
              </a>
            </li>
            <li>
              <a href="#" className="rounded p-2">
                Page 2
              </a>
            </li>
            <li>
              <a href="#" className="rounded p-2">
                Page 3
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-col md:flex-row whitespace-nowrap">
        <aside>
          <div className="sticky top-0 p-4">
            <h2 className="text-xl pb-5">Posts</h2>
            <nav>
              <ul className="flex md:flex-col gap-4">
                <li>
                  <a href="#" className="hover:bg-blue-300 rounded p-2">
                    Post 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:bg-blue-300 rounded p-2">
                    Post 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:bg-blue-300 rounded p-2">
                    Post 3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="p-4">
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <section key={post.id}>
                <h3 className="font-bold pb-2">{post.title}</h3>
                <p className="whitespace-pre-line">{post.text}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
