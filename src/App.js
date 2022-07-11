import './App.css';

function App() {
  return (
    <div className="App">

      <div className='name'>transition</div>
      <div className="wrapper-blocks">
        <div className="block transition1">background-color, perspective(500px) from: rotateY(0deg) to: rotateY(180deg);</div> 
        <div className="block transition2">perspective(500px) from: rotateX(0deg) to: rotateX(180deg)</div> 
        <div className="block transition3">perspective(500px) from: rotateX(0deg) to: rotateX(30deg)</div> 
        <div className="block transition4">perspective(500px) to: skew(30deg, 0)</div> 
        <div className="block transition5">perspective(500px) translate(0, 50px)</div> 
        <div className="block transition6">perspective(500px) translateZ(-50px)</div> 
      </div>

      <div className='name'>perspective</div>
      <div className="wrapper-blocks">
        <div className="block perspective1">perspective(200px) rotateY(30deg)</div> 
        <div className="block perspective2">perspective(500px) rotateY(30deg)</div> 
        {/* <div className="block perspective3">perspective(500px) rotateY(50deg)</div>  */}
        <div className="block perspective4">perspective(500px) rotateY(150deg)</div> 
        <div className="block perspective5">perspective(500px) rotateY(-50deg)</div> 
        <div className="block perspective6">perspective(500px) rotateX(50deg)</div> 
      </div>

      <div className='name'>perspective, backface-visibility: visible</div>
      <div className="wrapper-blocks">
        <div className="block backface-visibility1">perspective(500px) rotateY(30deg)</div> 
        <div className="block backface-visibility2">perspective(500px) rotateY(55deg)</div> 
        <div className="block backface-visibility3">perspective(500px) rotateY(80deg)</div> 
        <div className="block backface-visibility4">perspective(500px) rotateY(100deg)</div> 
        <div className="block backface-visibility5">perspective(500px) rotateY(125deg)</div> 
        <div className="block backface-visibility6">perspective(500px) rotateY(150deg)</div> 
      </div>

      <div className='name'>rotate</div>
      <div className="wrapper-blocks">
        <div className="block rotate45">rotate(45deg)</div> 
        <div className="block rotateX45">rotateX(45deg)</div> 
        <div className="block rotateY45">rotateY(45deg)</div> 
        <div className="block rotate150">rotate(150deg)</div>         
        <div className="block rotateX150">rotateX(150deg)</div>         
        <div className="block rotateY150">rotateY(150deg)</div>         
      </div>

      <div className='name'>scale</div>
      <div className="wrapper-blocks">
        <div className="block scale1">scale(1.2)</div> 
        <div className="block scale2">scale(2)</div> 
        <div className="block scale3">scale(1)</div> 
        <div className="block scale4">scale(0.7)</div> 
        <div className="block scale5">scale(-1)</div>
        <div className="block scale6">scale(1.5, 2)</div> 

      </div>

      <div className='name'>skew</div>
      <div className="wrapper-blocks">
        <div className="block skew1">skew(30deg, 0)</div> 
        <div className="block skew2">skew(0, 30deg)</div> 
        <div className="block skew3">skew(10deg, 10deg)</div> 
        <div className="block skew4">skewX(25deg)</div> 
        <div className="block skew5">skewY(25deg)</div> 
      </div>

      <div className='name'>translate</div>
      <div className="wrapper-blocks">
        <div className="block translate1">translate(30px, 0)</div> 
        <div className="block translate2">translate(0, 30px)</div> 
        <div className="block translate3">translate(-15px, 30px)</div> 
        <div className="block translate4">translate(0, 0)</div> 
        {/* <div className="block translate5">skewY(25deg)</div>  */}
      </div>


      <div className="wrapper-blocks"></div>
      <div className="wrapper-blocks"></div>





    </div>
  );
}

export default App;
