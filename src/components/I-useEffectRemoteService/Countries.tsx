import { useEffect, useState } from "react"
import { getAllCountries } from "../../services/countries"
// I-useEffectRemoteService
const Countries = () => {
  const [countries, setCountries] = useState([] as any)

  const getCountries = async () => {
    const listOfcountires = await getAllCountries();
    setCountries(listOfcountires)
  }
  useEffect(() => {
    getCountries();
  }, [])
  return (
    countries && countries.map((site: any) => (<div role="contentinfo" key={site.name.common}>{site.name.common}</div>))
  )
}

export default Countries;
