import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route>
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p style={{ color: "var(--text-muted)" }}>Page not found</p>
            <a href="/" className="mt-4 inline-block text-sm font-medium" style={{ color: "var(--accent)" }}>Go home</a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;