function Body(){  
    const number = 1;
    const number1 = 2;
    const number2 = 3;
    const str1 = "hello"
    const str2 = "world!"
    const bool1 = true;
    const bool2 = false;
    
    return(
      <div>
        <hr></hr>
        <h1>Body</h1>
        <h2>number is {number}</h2>
        <h2>{number1} + {number2} = {number1 + number2}</h2>
        <h2>{str1 + str2}</h2>
        <h2>{String(bool1 || bool2)}</h2>
        <hr></hr>
      </div>
    );
}

export default Body;