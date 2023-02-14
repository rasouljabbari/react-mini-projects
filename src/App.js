import Header from "./components/header/Header";
import RouteHandler from "./components/routes/RouteHandler";

function App() {
    return (
        <div className={'container mx-auto mb-8 px-8'}>
            <Header/>
            <RouteHandler/>
        </div>
    );
}

export default App;
