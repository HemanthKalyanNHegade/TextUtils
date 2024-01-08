import React from 'react'

export default function About(props) {
    // const [{color:props.mode==='dark'?'white':'black'},set{color:props.mode==='dark'?'white':'black'}]=useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid black'
    // })

    // const [btnText,setBtnText] = useState("Enable dark mode")
    
    // const toggleStyle =()=>{
    //     if({color:props.mode==='dark'?'white':'black'}.color==='white'){
    //         set{color:props.mode==='dark'?'white':'black'}({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid black'
    //         })
    //         // setBtnText("Enable dark mode");
    //     }
    //     else{
    //         set{color:props.mode==='dark'?'white':'black'}({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'
    //         })
    //         // setBtnText("Enable light mode");
    //     }
    // }
    

    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" style={{color:props.mode==='dark'?'white':'black'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={{color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black'}}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black'}}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black'}} >
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
            
        </div>
    )
}
