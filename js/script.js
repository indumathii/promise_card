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
        
        
        length_of_array=array_json.length;
       


        let container_main=document.createElement("div")
        container_main.className="container"
        document.body.appendChild(container_main)

        let h1_element=document.createElement("h1")
        h1_element.setAttribute("id","title");
        h1_element.className="text-center"
        h1_element.textContent='RestCountries Card'
        container_main.appendChild(h1_element);
        
        let row_column=document.createElement("div")
        row_column.setAttribute("class","row")
        container_main.appendChild(row_column)
        
        var row = document.querySelector('body div.container div.row');
        console.log(row);

        for(let i=0;i<length_of_array;i++)
            {   

                let div_section=document.createElement("div")
                div_section.setAttribute("id","div_section"+i);
                div_section.setAttribute("class"," div1 col-sm-6 col-md-4 col-lg-4 col-xl-4 p-2")
                row_column.appendChild(div_section)
                
                
                let cards=document.createElement("div")
                cards.setAttribute("class","card h-100")
                div_section.appendChild(cards)


                
                let div_title=document.createElement("div")
                div_title.setAttribute("class","card-header d-flex align-items-center justify-content-center")
                div_title.style.background='black' 
                div_title.style.color='white'        
                div_title.textContent = array_json[i].name.common;
                cards.appendChild(div_title)

                let div_img_section=document.createElement("div")
                div_img_section.setAttribute("class","div_img_class d-flex align-items-center w-10 w-sm-10 w-md-10 w-lg-10 w-xl-0.1 w-xxl-8") 
                cards.appendChild(div_img_section)

                
                let img_section=document.createElement("img")
                img_section.setAttribute("class","img_class card-img-top d-flex align-items-center ") 
                img_section.setAttribute("src",array_json[i].flags.png) 
                img_section.setAttribute("alt","image not available") 
                div_img_section.appendChild(img_section)


                
                let country_details=document.createElement("div")
                country_details.setAttribute("class","card-body d-flex align-items-center") 
                cards.appendChild(country_details)
                
                
                let capital_section=document.createElement("div")
                capital_section.setAttribute("class","card-text d-flex align-items-center ") 
                country_details.appendChild(capital_section)
                capital_section.textContent = "Region: "+array_json[i].capital;
                
                let region_section=document.createElement("div")
                region_section.setAttribute("class","card-text d-flex align-items-center ") 
                country_details.appendChild(region_section)
                const nativeNames = array_json[i].name.nativeName;
                const nativeName = Object.values(nativeNames)[0].common
                region_section.textContent = "Native Name: "+nativeName;

                let country_code_section=document.createElement("div")
                country_code_section.setAttribute("class","card-text d-flex align-items-center ") 
                country_details.appendChild(country_code_section)
                country_code_section.textContent = "Population: "+array_json[i].population;

                let btn_click=document.createElement("div")
                btn_click.setAttribute("class","btn_class btn btn-sm btn-primary d-flex align-items-center w-10 ") 
                country_details.appendChild(btn_click)
                btn_click.textContent = "Click to Check Weather";

                btn_click.addEventListener("click",function(){
                    country_name=array_json[i].name.common;
                    app_id='f8b6f89980bad6bc5226a51730865f16'
                    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country_name}&APPID=${app_id}`;  // Replace with your API endpoint

                fetch(apiUrl)
                        .then(
                            function(response) 
                            {
                                console.log(response)
                                return response.json()
                            })
                        .then(
                            function(dataset){
                                let weather_json=dataset;
                                let temperature=dataset.main.temp
                                let temp_min=dataset.main.temp_min
                                let temp_max=dataset.main.temp_max
                                let windspeed=dataset.wind.speed
                                let weather_desc=dataset.weather[0].description

                                let box_page=document.createElement("div")
                                box_page.setAttribute("class","box_page d-flex flex-column") 
                                cards.appendChild(box_page)

                                let box_content=document.createElement("div")
                                box_content.setAttribute("class","box_class d-flex ") 
                                box_content.setAttribute("id","box_class_id") 
                                box_page.appendChild(box_content);
                                box_content.textContent = `Temp: ${temperature} <=${temp_min} <=${temp_max}  Description:${weather_desc}  
                                  Wind speed:${windspeed}`;
                                box_content.display='flex align-items-center'

                                let box_close_btn=document.createElement("div")
                                box_close_btn.setAttribute("class","box_close_btn btn btn-sm btn-primary d-flex align-items-center ") 
                                box_page.appendChild(box_close_btn)
                                box_close_btn.textContent = "Ok";

                                box_close_btn.addEventListener("click",function()
                                {   
                                console.log("button click close")
                                box_page.style.setProperty('display', 'none', 'important');
                                })

                            })
                        .catch(
                            function(errordata){
                                let box_page=document.createElement("div")
                                box_page.setAttribute("class","box_page d-flex flex-column align-items-center ") 
                                cards.appendChild(box_page)
                                let box_content=document.createElement("div")
                                box_content.setAttribute("class","box_class d-flex align-items-center ") 
                                box_content.setAttribute("id","box_class_id") 
                                box_page.appendChild(box_content);
                                box_content.textContent = 'City not found';
                                box_content.display='flex align-items-center justify-content-center'
                                let box_close_btn=document.createElement("div")
                                box_close_btn.setAttribute("class","box_close_btn btn btn-sm btn-primary d-flex align-items-center ") 
                                box_page.appendChild(box_close_btn)
                                box_close_btn.textContent = "Ok";
                                box_close_btn.addEventListener("click",function()
                                {   
                                console.log("button clicked close")
                                box_page.style.setProperty('display', 'none', 'important');
                                })

                            }
                        )
                    
                    
                    
                });

            
        

        }
});

    






