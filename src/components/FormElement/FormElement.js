import React from 'react';
import classes from './FormElement.module.css';
const formElement =(props)=>{
    let returnElement =null;
    
    //console.log("===============",props);
   

    if(props.config.elementType === 'input')
    {   
        if(props.config.elementConfig.type === 'file'){
            //console.log("file");
            returnElement = <input type="file" onChange = {props.changed} id = {props.id} disabled = {props.config.hide} />
        }else if(props.config.elementConfig.type === 'number'){

            //console.log("file");
            returnElement = <input type="number" onChange = {props.changed} id = {props.id} disabled = {props.config.hide}/>
        }else if(props.config.elementConfig.type === 'text'){

            returnElement = <input type="text" onChange = {props.changed} id = {props.id} disabled = {props.config.hide} />
        }else if(props.config.elementConfig.type === 'checkbox'){

            
            returnElement = <input type="checkbox" onChange = {props.changed} value = {props.config.value} checked = {props.config.elementConfig.checked} id = {props.id} disabled = {props.config.hide}/>;
            //returnElement = <input type = "checkbox" disabled = {!props.config.hide} />
        }
        else if(props.config.elementConfig.type === 'radio'){
            let radioList = [...props.config.elementConfig.options];
            //console.log("radio list ", radioList);
            returnElement = (
                <div className = {classes.RadioFormGroup}>
                    {
                        radioList.map(igkey=>
                        {
                            return(
                                <div key = {'radio'+igkey.value} className = {classes.RadioFormElement}>
                                    <input type="radio" id = {'radio'+igkey.label} value = {igkey.value} name = {props.id} onChange = {props.changed}/>
                                    <label htmlFor={'radio'+igkey.label}>{igkey.displayValue}</label>
                                </div>
                            );
                        })
                    }

                </div>
            );
        }
    }else if(props.config.elementType === 'select'){
        let optionsObject = [...props.config.elementConfig.options];
        const optionsArray = [];
        //console.log(optionsObject);
        
        for(let i in optionsObject){
            //console.log(optionsObject.length);
            //console.log(optionsObject[i]);
            optionsArray.push({value: optionsObject[i].value, display: optionsObject[i].displayValue});
        }
        //console.log('Options array',optionsArray);
        returnElement = (
            <div   >
                   <select onChange = {props.changed} id = {props.id} disabled = {props.config.hide}>{
                    optionsArray.map(igkey=>{
                        return(
                            <option key = {igkey.value} value={igkey.value}>{igkey.display}</option>
                        );
                    })  
                } 
                    </select>           
            </div>
        );
    }
return (
    <div className = {[classes.FormGroup, props.config.hide ? classes.Hide : classes.Show].join(' ')}>
        <label htmlFor={props.id}>{props.config.label}</label>
        {returnElement}
        
    </div>
);
};
export default formElement;
/*
<label htmlFor={props.id}>{props.label} - {props.id}- {props.elementType}</label>
                 
*/