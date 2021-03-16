import React, {useState} from 'react'


const Tab = (props) => {
    const [tabOpen, setTabOpen] = useState({});
    const { array } = props;
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <div className="container text-left">
                <ul>{
                    array.map( (item, i) => {
                        if(i === tabOpen - 1){
                            return <div className="tab" style={{backgroundColor: "orange"}} onClick={ e => setTabOpen(i + 1)}><h1 className="text-left">Tab {i + 1}</h1></div>
                        }else{
                            return <div className="tab" onClick={ e => setTabOpen(i + 1)}><h1 className="text-left">Tab {i + 1}</h1></div>
                        }
                    }
                    )
                    
                }
                </ul>
                <div className="container border">
                    <h4>Tab Contents:</h4>
                    <p>{ array[tabOpen - 1] }</p>
                </div>
            </div>
        </div>
    )
}

export default Tab
