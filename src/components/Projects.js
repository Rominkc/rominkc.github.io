import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lightbox from 'react-image-lightbox';

import RanPgArr from './RanPassImages';
import OuterspaceEscArr from './OuterspaceEscImages';
import BlockSliceArr from './BlockSlice2dImages';
import UpNxtCryptoArr from './UpNxtCryptoImages';
import Damage2KOWImages from './Damage2KOWImages'
import './Projects.css';
import "react-image-lightbox/style.css";


class Projects extends Component {
 state={
     photoIndex:0,
     isOpen:false,
     ProjectNumber:1,
 };

    render(){
    const { photoIndex, isOpen, ProjectNumber } = this.state;
    // Make a new array everytime render is called which then gets assigned to a copy of the correct gallery
    let Images=[];
    //Switch Statement to choose which array of images should be used for src, makes copy of the array for immutability
    switch(ProjectNumber) {
        case 1:
            Images= [...UpNxtCryptoArr];
            break;
        case 2:
            Images = [...Damage2KOWImages];
            break;
        case 3:
            Images= [...BlockSliceArr];  
            break;
        case 4:
            Images = [...RanPgArr];
            break;
        case 5:
            Images= [...OuterspaceEscArr];
            break;      
        default: Images=[];
      }
    return(
        <Container>
         
          {/*Conditionally open Modal Gallery */}
          {isOpen &&
                     (  
                    <Lightbox
                        mainSrc={Images[photoIndex]}
                        nextSrc={Images[(photoIndex + 1) % Images.length]}
                        prevSrc={Images[(photoIndex + Images.length - 1) % Images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false, photoIndex:0, ProjectNumber:1 })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + Images.length - 1) % Images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % Images.length,
                        })
                        }
                    />
                    )}
            <Row >  {/*Lightbox Conditional Rendering Based on which button is clicked, Different class names based on if primary photo is vertical or horizontal */}
                <Col xs={12} md={4}>
                        <img src={UpNxtCryptoArr[0]} className='image-styles-portfH' alt="UpNxtCrypto"/>
                        <div id="gallery-overlay-UNC">
                            <div className="gallery-items">
                            <h4 >UpNxt Crypto</h4>
                            {/*Added paragraph tag for button styles, and so all buttons follow same styling rules, if used anchor tag a warning is given for no href */}
                            <p className="button-paragraph">
                                <button type="button" onClick={() => this.setState({ isOpen: true,ProjectNumber:1 })}>
                                See Project
                                </button>
                                </p>
                            <p className="button-paragraph">
                                <a href='https://github.com/Rominkc/upnxt-crypto'
                                    target="_blank" rel="noopener noreferrer">
                                        <button type="button"  >
                                        See the Code
                                        </button>
                                </a>
                            </p>
                            <p className="button-paragraph">
                                <a href='https://upnxt-crypto.herokuapp.com/'
                                    target="_blank" rel="noopener noreferrer">
                                        <button type="button"  >
                                        See the Website
                                        </button>
                                </a>
                            </p>
                            <p className="button-paragraph">
                                <a href='https://docs.google.com/document/d/16BS6toEbC46MhtTcQfNwNa4OliJ46I5YQbLNCtKK03E/edit?usp=sharing'
                                    target="_blank" rel="noopener noreferrer">
                                        <button type="button"  >
                                        See Project Design
                                        </button>
                                </a>  
                            </p>
                                  
                            </div>
                        </div>        
                </Col>
                <Col xs={12} md={4}>
                        <img src={Damage2KOWImages[0]} className='image-styles-portfH' alt="Damage to Kill Overwatch"/>
                        <div id="gallery-overlay-UNC">
                            <div className="gallery-items">
                            <h4 >Damage to Kill Overwatch</h4>
                            {/*Added paragraph tag for button styles, and so all buttons follow same styling rules, if used anchor tag a warning is given for no href */}
                            <p className="button-paragraph">
                                <button type="button" onClick={() => this.setState({ isOpen: true,ProjectNumber:2 })}>
                                See Project
                                </button>
                                </p>
                            <p className="button-paragraph">
                                <a href='https://github.com/Rominkc/Damage-to-Kill-Overwatch'
                                    target="_blank" rel="noopener noreferrer">
                                        <button type="button"  >
                                        See the Code
                                        </button>
                                </a>
                            </p>
                            <p className="button-paragraph">
                                <a href='https://d2koverwatch.netlify.com/'
                                    target="_blank" rel="noopener noreferrer">
                                        <button type="button"  >
                                        See the Website
                                        </button>
                                </a>
                            </p>  
                            <p className="button-paragraph">
                                <a href='https://docs.google.com/document/d/1g9e8KzVP5M5RCiGpKSYfugOqaGhXi6Akp1FJ5lSe-5w/edit?usp=sharing'
                                    target="_blank" rel="noopener noreferrer">
                                        <button type="button"  >
                                        See Project Design
                                        </button>
                                </a>       
                            </p>   
                                 
                            </div>
                        </div>        
                </Col>
                <Col xs={12} md={4}>
                    <img src={BlockSliceArr[0]} className='image-styles-portfH' alt="BlockSlice2d"/>
                    <div id="gallery-overlay-BS2D">
                        <div className="gallery-items">
                        <h4 >BlockSlice 2D *Beta*</h4>
                        <p className="button-paragraph">
                            <button type="button" onClick={() => this.setState({ isOpen: true,ProjectNumber:3 })}>
                            See Project
                            </button>
                        </p>
                        <p className="button-paragraph">
                            <a href='https://github.com/Rominkc/Block-Slice-2D-Web'
                                target="_blank" rel="noopener noreferrer">
                                    <button type="button"  >
                                    See the Code
                                    </button>
                            </a>
                        </p>
                        <p className="button-paragraph">
                            <a href='https://www.newgrounds.com/portal/view/710631'
                                   style={{width:'100%'}}
                                   target="_blank" rel="noopener noreferrer">
                                    <button type="button"  >
                                    Play the Game
                                    </button>
                            </a>  
                        </p> 
                           
                        </div>
                    </div>        
                </Col>    
           
         
           
              
            </Row> 
            <Row>
                <Col xs={12} md={4} >
                    <img src={RanPgArr[0]} className='image-styles-portfV'alt="RandomPasswordGen" />  
                    {/*Divs for overlay of base image, takes the img and divs out of flow so they can overlap and match in width and height */}
                    <div id="gallery-overlay-RPG">
                        <div className="gallery-items">
                            <h4 >Project RPG</h4>
                            <p className="button-paragraph-L">
                                <button type="button" onClick={() => this.setState({ isOpen: true,ProjectNumber:4 })}>
                                See Project
                                </button>
                            </p>
                            <p className="button-paragraph-L">   
                                {/*Make width of anchor tag same as width of parent element so that button gets correct width % based on parent element, and not the anchor tag */}
                                <a href='https://github.com/Rominkc/Project-Random-Password-Generator'
                                    target="_blank" rel="noopener noreferrer">
                                    <button type="button"  >
                                    See the Code
                                    </button>
                                </a>
                            </p>
                            <p className="button-paragraph-L">
                                <a href='https://docs.google.com/presentation/d/1UMnyrL0oHHAkyF5MLO8H1rIuQPp5tRMCedCp3vj68Ls/edit?usp=sharing'
                                    target="_blank" rel="noopener noreferrer">
                                    <button type="button"  >
                                    See Project Design
                                    </button>
                                </a>
                            </p>         
                            </div>
                        </div> 
                       
                </Col>        
                <Col xs={12} md={4}>
                    <img src={OuterspaceEscArr[0]} className='image-styles-portfH' alt="OuterSpaceEscape" />
                    <div id="gallery-overlay-OSE">
                        <div className="gallery-items">
                        <h4 >Outerspace Escape</h4>
                        <p className="button-paragraph">
                            <button type="button" onClick={() => this.setState({ isOpen: true,ProjectNumber:5 })}>
                            See Project
                            </button>
                        </p>
                        <p className="button-paragraph">
                            <a href='https://github.com/Rominkc/Outerspace-Escape'
                                target="_blank" rel="noopener noreferrer">
                                    <button type="button"  >
                                    See the Code
                                    </button>
                            </a> 
                        </p>   
                        </div>
                    </div>
                </Col>
                        
            </Row>     
        </Container>
    );
 }
}
export default Projects;