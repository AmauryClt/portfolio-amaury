import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./structure/Header";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.portfolioForm}>
      <div className={styles.mediaForm}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
