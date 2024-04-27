import { useEffect } from "react";
import "./App.css";

import { AppRoute } from "./AppRoute";
import { utilStorage } from "./utils";
import { saveCharacters } from "./redux/slices/character.slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const charactersAdded = utilStorage.getDataStorage("characters_added");
  //   if (charactersAdded !== null) dispatch(saveCharacters(charactersAdded));
  //   else dispatch(saveCharacters([]));
  // }, [dispatch]);

  // const accessStorage = utilStorage.getDataStorage("access");
  // useEffect(() => {
  //   setAccess(accessStorage);
  //   if (!access) {
  //     navigate("/");
  //   } else {
  //     navigate("/home");
  //   }
  // }, [access, accessStorage, navigate]);

  useEffect(() => {
    const characters_add = utilStorage.getDataStorage("characters_added");
    if (characters_add) dispatch(saveCharacters(characters_add));
  }, []);
  return (
    <div>
      {/* <Toaster richColors /> */}
      <AppRoute />
      {/* 
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
