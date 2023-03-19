import React from 'react'
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css';




class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { clicks: 0}
  }

  

  render(){
    
    return <div> 
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    <div className='main'> 
      <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             
           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             
             <input type="text" placeholder="username" className="name"/>
           </div>
           <div className="second-input">
             
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            
           
 
         </div>
       </div>
       

     </div>
    </div>

</div>
      
      
    
    

    
    

  }
}


export default App;
