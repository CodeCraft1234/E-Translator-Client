
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    //this is navber navlink
    const link=<>
    <NavLink className="mr-3">Home</NavLink>
    <NavLink className="mr-3">Features</NavLink>
    <NavLink className="mr-3">Translate</NavLink>
    <NavLink className="mr-3">Blogs</NavLink>
    </>
    
    return (
        <div>
           <h1>Hello translators</h1> 
           <h2>hello</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas autem voluptates, repudiandae corporis corrupti ullam suscipit nesciunt excepturi ab rem nobis eos dolorem quaerat optio earum et itaque nam? In!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eveniet non eos officia sequi minus, cum voluptatem libero, illo veniam dignissimos veritatis eligendi labore at dolor? Distinctio ea dignissimos tenetur?</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eos eveniet eligendi exercitationem fugit voluptatum ipsam vero vitae numquam atque excepturi sint voluptatem, tenetur, voluptate amet obcaecati nulla neque nostrum?</p>
        </div>
    );
};


export default Navbar;


