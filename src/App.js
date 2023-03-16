import './App.css';
import Background from './components/Background';
import Header from './components/Header';
import Content from './components/Content';
import Imageslider from './components/Imageslider';
import SecondContent from './components/SecondContent';
import Motivationfooter from './components/Motivationfooter';
import Navigation from './components/Navigation';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div>
        <Background></Background>
        <Navigation></Navigation>
        <Header></Header>
        <Content></Content>
        <Imageslider></Imageslider>
        <SecondContent></SecondContent>
        <Motivationfooter></Motivationfooter> 
        <ImageGallery></ImageGallery>
    </div>
  );
}

export default App;
