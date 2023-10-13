import { Link, Outlet } from "react-router-dom"

function App() {


  return (
    <div>
      <div><h1>Blogs</h1>
        <nav>
          <Link to="/post">Post</Link>
        </nav>
      </div>

      <Outlet></Outlet>
    </div>
  )
}

export default App
