import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked" +text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to  upper case","success");
    }
    
    const handleLoClick = () => {
        console.log("lowercase was clicked" +text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick = () => {
        let newText =" ";
        setText(newText);
        props.showAlert("text is clear","success");
    }
    const handleCopyClick = () => {
      console.log("I am copy" );
      var text = document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("the text is copied!","success");
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}
    
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Only Shravii chould write here !");
  return (
    <>
    <div className='container' style = {{color:props.mode === 'dark'? 'white':'#040b15'}}>
        <h1> {props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange= {handleOnChange} style = {{backgroundcolor:props.mode === 'dark'? 'grey':'white' ,color:props.mode === 'dark'? 'white':'#040b15'}} id="mytext" rows="8"></textarea>
</div>
<button className="btn btn-success mx-2 " onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-success mx-2" onClick={handleLoClick}>convert to lowercase</button>
<button className="btn btn-success mx-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-success mx-2 " onClick={handleCopyClick}>text copied</button>
<button className="btn btn-success " onClick={handleExtraSpace}>Remove extra spaces</button>

</div>  
    <div className="container my-2" style = {{color:props.mode === 'dark'? 'white':'#040b15'}}> 
        <h1> your text summary </h1>
       <p>{text.split(" ").length} words and {text.length} character</p>
       <p>{0.008 *text.split(" ").length} minutes reads</p>
       <h2> preview</h2>
       <p>{text.length>0?text:"write something in text box to preview it here !"}</p>
    </div>
    </>
  );
}
