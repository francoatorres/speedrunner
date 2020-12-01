import './App.css';
import Joanna from './Joanna';

function App() {
  return (
    <Joanna
      all={`
        | t1
        | p1
        [
          - option a
            | option a title
            | option a para
            [
              - option a b
                | option a b title
                []
            ]
          - option b
            |
            |
            [
              - option b a
                |
              - otion b b
                []
            ]
          - option c
            |
            []
        ]
      `}
    />
  );
}

export default App;
