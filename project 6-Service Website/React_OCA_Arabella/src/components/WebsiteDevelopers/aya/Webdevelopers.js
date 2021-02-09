import React from 'react'
import WebDeveloper from './Webdeveloper';
import './Webdevelopers.css';

    class Webdevelopers extends React.Component {
        state = {
            developers : [
                    {id: '1',
                    img: 'https://picsum.photos/500/450' ,
                    name : 'Maria Alzu\'bi' ,
                    position : 'Maria Alzu\'bi' ,
                    description : 'Maria Alzu\'bi' ,
                    facebook :'https://www.facebook.com/maria.alzoubi.5/' ,
                    linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                     gitHub : 'https://github.com/Marya-Alzubi' },
            ],
            showStudents : true,
        }

        render() {
  return(

<div>
<WebDeveloper 
 img={this.state.developers[0].img}
//  img='https://picsum.photos/500/451'
       name={this.state.developers[0].name}
       position={this.state.developers[0].position}
       description={this.state.developers[0].description}
       facebook= {this.state.developers[0].facebook}
       linkedin= {this.state.developers[0].linkedin}
       github= {this.state.developers[0].github}

/>
</div>

   )
}}
export default  Webdevelopers;











