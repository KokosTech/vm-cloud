import VRoutes from "./routes/Routes";
import { ProjectProvider } from "./context/projectContext";

const App = () => (
  <ProjectProvider>
    <VRoutes />
  </ProjectProvider>
);

export default App;
