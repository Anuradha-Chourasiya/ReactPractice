
function Demo() {
 const countries=['India','Us', 'Japan']
 const results=[];
 
    countries.forEach((country,index)=>
    {
        results.push(
            <div key={index}>
                <p>{country}</p>
            </div>
        );
    });
    for(let country of countries){
        results.push(
            <div>
                <p>{country}</p>
            </div>
        );
    }
    for(let country in countries){
        results.push(
            <div>
                <p>{countries[country]}</p>
            </div>
        );
        }
    return(
        <p>{results}</p>
        
    )
 }


export default Demo;
