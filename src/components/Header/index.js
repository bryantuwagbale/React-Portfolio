import React from 'react';

function Header() {

    // const categories = [
    //     {
    //       name: "About", description:"about me section",
    //     },
    //     { name: "Projects", description: "the projects I've completed" },
    //     { name: "Contact", description: "contact section" 
        
    //     },
        
    //   ];

    //   function categorySelected() {
    //     console.log("hello")
    //   }

    return (
        <header>
            
    <nav>
    <ul className="flex-row">
    <li className="mx-2"> <a href="#about">
      About
      </a>
      {/* <h1 id="about">About Me</h1>
            <div>
                <p>
                    My name is Bryant Uwagbale. I am Web Developer who prides himself on his 
                    ability to continously evolve in any high-intensity enviornment. 
                </p>
            </div> */}

        
    </li>
      <li className="mx-2"> <a href="#Contact">
      Contact
      </a>
      </li>
      <li className="mx-2"> <a href="#projects">
      Projects
      </a>
      </li>
      <li className="mx-2"> <a href="#resume">
      Resume
      </a>
      </li>
      {/* {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={categorySelected} >
            {category.name}
          </span>
        </li>
      ))} */}
    </ul>
  </nav>
        </header>
    );
}
export default Header;