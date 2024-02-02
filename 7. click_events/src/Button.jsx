
function Button() {


    // const handleClick1 = () => console.log("OUCH!!!!!!!!")

    // const handleClick2 = (name) => console.log(`${name} stop clicking me!!!!!!!!!!!!!!!`)


    // let count = 0;
    // const handleClick3 = (name) => {
    //     if (count < 3 ) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }
    

    const handleClick4 = (e) => {
        e.target.textContent = "OUCHHH";
    }



    return(

        // <button onClick={handleClick1}>click me✔</button>
        // <button onClick={() => handleClick2("Hong")}>click me✔</button>
        // <button onClick={() => handleClick3("Hong")}>click me✔</button>
        // <button onClick={(e) => handleClick4(e)}>click me✔</button>
        <button onDoubleClick={(e) => handleClick4(e)}>click me✔</button>
    )

}



export default Button