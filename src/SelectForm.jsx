import React, { Component, useState } from 'react';

const ShowChoice = (props) => {
    return (
        <div>
          <p style={{marginTop: '20vh',}} className="item-1">{props.question}<strong style={{color: 'red',}}>{props.thing}</strong>!!!</p>
        </div>
        
    )
}

const Options = (props) => {
    const choicelist=props.choices.map((item)=> <option value={item}>{item}</option>)
    return (
        <>{choicelist}</>
    )
}

const ChoiceForm = (props) => {
    return (
        <div style={{marginTop: '3vh',marginLeft: '3vw',}}>          
        <form onSubmit={props.onsubmit}>
          <label>
            {props.question}
            <span style={{marginLeft: '2%',marginRight: '2%',}}>
            <select value={props.value} onChange={props.onchange}>
              <Options choices={props.choices}/>
            </select>
            </span>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

const SelectForm = () => {
    const [value, setValue] = useState("getting a refund");
    const [submitted, setSubmitted] = useState(false);        

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
    }

    const prompt = "I just took a DNA test, turns out I'm ";
    const answers = ["getting a refund","100% that bitch","the father","not the father","a pug","genetically more susceptible to dementia","beautiful","boring"]

    const beforeAfterSubmit = (didCompleteForm) => {
        if (didCompleteForm) {
            return  <ShowChoice question={prompt} thing={value}/>
        } else {
            return  <ChoiceForm onsubmit={handleSubmit} onchange={handleChange} value={value} choices={answers} question={prompt}/>
        }}
                    
    return (
        <> {beforeAfterSubmit(submitted)}
        </>
    );
}



export default SelectForm;
