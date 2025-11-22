
import Box from './Box.jsx';
import Display from './Display.jsx';
import Symbol from './Symbol.jsx';
import Button from './Button.jsx';

const App = () => {
  return (
    <>
      <Box>
        <Display>
          <Symbol />
        </Display>
        <Box>
          <Button />
          <Button />
          <Button />
          <Button />
        </Box>
      </Box>
    </>
  );
}

export default App;
