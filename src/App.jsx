import SmallJsApps from "./pages/smallJsApps/SmallJsApps";
import UiElement from "./pages/UiElement/UiElement";
import styles from './styles.module.css';
function App() {

return (
  <div className={styles.container}>
    <UiElement />
    <SmallJsApps />
  </div>
  )
}

export default App
