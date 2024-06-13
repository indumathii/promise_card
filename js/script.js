const fetchresult=fetch("https://restcountries.com/v3.1/all")
console.log(fetchresult)
fetchresult.then(
    function(result){
        console.log("inside fullfil handler");
        return result.json();
    }
).then(
    function(data){
        let array_json=data;
        console.log(array_json);
        
        length_of_array=array_json.length;
        console.log(length_of_array);
        let container_main=document.createElement("div")
        container_main.setAttribute("class","container-fluid")
        
        let row_for_column=document.createElement("div")
        row_for_column.setAttribute("class","row justify-content-center")
        container_main.appendChild(row_for_column)
        document.body.appendChild(container_main)

        for(let i=0;i<length_of_array;i++)
            {   
                let div_section=document.createElement("div")
                div_section.setAttribute("id","div_section"+i);
                div_section.setAttribute("class","boxes d-flex flex-column col-12 col-sm-12 col-md-4 col-lg-3 m-2")
                
                
                row_for_column.appendChild(div_section)
                let div_title=document.createElement("div")
                div_title.setAttribute("class","title_class d-flex align-items-center justify-content-center")
                div_title.style.background='black' 
                div_title.style.color='white'        
                div_title.textContent = array_json[i].name.common;
                div_section.appendChild(div_title)

                let div_img_section=document.createElement("div")
                div_img_section.setAttribute("class","div_img_class d-flex align-items-center ") 
                div_section.appendChild(div_img_section)

                
                let img_section=document.createElement("img")
                img_section.setAttribute("class","img_class d-flex align-items-center ") 
                img_section.setAttribute("src",array_json[i].flags.png) 
                div_img_section.appendChild(img_section)

                
                let capital_section=document.createElement("div")
                capital_section.setAttribute("class","capital_class d-flex align-items-center ") 
                div_section.appendChild(capital_section)
                capital_section.textContent = "Capital: "+array_json[i].capital;
                
                let region_section=document.createElement("div")
                region_section.setAttribute("class","region_class d-flex align-items-center ") 
                div_section.appendChild(region_section)
                region_section.textContent = "Region: "+array_json[i].region;

                
                
                let country_code_section=document.createElement("div")
                country_code_section.setAttribute("class","country_code_class d-flex align-items-center ") 
                div_section.appendChild(country_code_section)
                country_code_section.textContent = "Country Code: "+array_json[i].cca3;

                let btn_click=document.createElement("div")
                btn_click.setAttribute("class","btn_class btn btn-sm btn-primary d-flex align-items-center ") 
                div_section.appendChild(btn_click)
                btn_click.textContent = "Click to Check Weather";

                btn_click.addEventListener("click",function(){
                 
                    const fetchweather=fetch("https://openweathermap.org/")
                    console.log(fetchweather)
                    fetchweather.then(
                        function(response){
                            console.log("inside fullfil handler of weather");
                            return response.json();
                        }
                    ).then(
                        function(data1){
                            let weather_json=data1;
                            console.log(weather_json);
                })

            });
        console.log("DoM created")

        }
});

    






//col-12 col-sm-12 col-md-4 col-lg-3">