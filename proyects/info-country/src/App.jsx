import { useState, useEffect } from "react";
import List_select from "./assets/components/list-select/list-select.jsx";
import Button_on from "./assets/components/button/button.jsx";

function App() {
  const [list_data, setList_data] = useState([]);
  const [info_contry, setInfo_contry] = useState([]);
  const [id_country, setId_country] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3");
        const data = await response.json();
        const list_info = data.map((datalist) => (
          {
            name: datalist.name.common,
            id: datalist.cca3,
          }
        )
        );
        setList_data(list_info);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSelect = (event) => {
    setId_country(event.target.value);
  }

  const click_boton = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/alpha/' +  id_country + '?fields:name,capital,region,languages,flags');
      const data = await response.json();
      const info_data = data.map((datalist) => (
        {
          name: datalist.name.common,
          capital: datalist.capital,
          region: datalist.region,
          languages: datalist.languages,
          flags: datalist.flags
        })
      );
      setInfo_contry(info_data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  return (
    <>
      <div>
        {list_data.length > 0 && <List_select list_data={list_data} onChange={handleSelect} />}
        <Button_on label={"Mas Informacion"} onClick={click_boton} />
      </div>
      <div>
        {info_contry.length > 0 && (
          <div>
            <h2>Informacion del pais</h2>
            <p>Nombre: {info_contry[0].name}</p>
            <p>Capital: {info_contry[0].capital}</p>
            <p>Region: {info_contry[0].region}</p>
            <p>Idiomas: {Object.values(info_contry[0].languages)}</p>
            <img src={info_contry[0].flags.png} alt={info_contry[0].name} />
          </div>
        )}
      </div>
    </>
  )

}



export default App;
