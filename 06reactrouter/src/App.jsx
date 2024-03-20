import {} from 'react'
import NavBar from './components/Navbar'





function App() {


  return (
    <>
      <NavBar></NavBar>
    </>
  )
}

export default App




// <Router>
//         <div>
//           {/* navigation link */}
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes path='/' exact Component={Home}/>
//           <Routes path='./assets/components/' exact Component={About}/>
//           <Routes path='contact' exact Component={Contact}/>
//         </div>
//       </Router>