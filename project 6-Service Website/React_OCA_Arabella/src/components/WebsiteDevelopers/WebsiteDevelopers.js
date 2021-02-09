import React from 'react'
import './WebsiteDeveloper/WebsiteDeveloper.css';
import WebsiteDeveloper from './WebsiteDeveloper/WebsiteDeveloper';


class WebsiteDevelopers extends React.Component {
    state = {
        developers : [
            {id: '1',
                img: '/images/maria.png',
                name : 'Maria Alzu\'bi' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,

                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
            {id: '3',
                img: 'https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/93189203_2847018718746421_3263196759999905792_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFUN0hk30WgVtG_6AimOv9dsv_1NsFXOBCy__U2wVc4EF6_RkS5K1Sk3q0Hew4FT6HQyAQ6znE2cg_a0hdWpa69&_nc_ohc=xa-Vu9av9M0AX8mIvWa&_nc_ht=scontent.famm2-3.fna&oh=56e50fc21f990f58949fefd6b1e5f53e&oe=604189B1' ,
                name : 'Anas Melhem' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,

                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },

            {id: '4',
                img: '/images/lana.png',
                name : 'Lana Mustafa' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,

                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
            {id: '2',
                img: 'https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/65907351_1978035372325343_2537101142400172032_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_eui2=AeHh_9xleGrGAKAV2tIIkHCZL0u3ErbQZA0vS7cSttBkDbCUullu9PUd7blGLOSFx4qW8ZV489-g-cccnQp6daA9&_nc_ohc=rkdZN3_fqSAAX-iPOO8&_nc_ht=scontent.famm2-3.fna&oh=ea8e35bf8f8b2a834928866827bc197e&oe=604383DB' ,
                name : 'Osama Abdullah' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,

                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
            {id: '5',
                img: '/images/aya.png',
                name : 'Aya kawaldeh' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,

                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
        ],
    }

    render() {
        return(

                <div className='big-container-website-developer'>
                <div className="six-website-developer">
                    <h1>Our Family
                        <span>let's meet our fabulous team  </span>
                    </h1>
                </div>

                <figure className="snip1515">
                {this.state.developers.map((developer, index) => {
                    return <WebsiteDeveloper
                        img={developer.img}
                        name={developer.name}
                        position={developer.position}
                        description={developer.description}
                        linkedin={developer.linkedin}
                        github={developer.gitHub}
                    />
                })}
                </figure>
    </div>

        )
    }}
export default  WebsiteDevelopers;









