import '../App.css';
import '../css/styles.css';

function App() {
  return (
    <div className="App">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://img.freepik.com/free-vector/abstract-colorful-fluid-background_23-2148901720.jpg" className="img img-fluid" alt="Color"/>
                </div>
                <div className="col-md-8 p-5">
                    <h4>It’s not about your foot, it’s about your style</h4>
                    <p>
                        Everybody knows what you wear really matter for your style, that’s why you need to colorize your style with the best stuff
                    </p>
                </div>
            </div>
            <div className="row bg-light mt-5">
                <div className="col-md-8 p-5">
                    <h4>Being cool is your right</h4>
                    <p>
                        Nobody has to be not cool when everybody could make themself cool. So come on, be cool by your own way
                    </p>
                </div>
                <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" className="img img-fluid" alt="Color"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
