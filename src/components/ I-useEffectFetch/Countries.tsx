import { useEffect, useState } from "react"

const Countries = () => {
  const [countries, setCountries] = useState([] as any)
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])
  return (
    countries && countries.map((site: any) => (<div role="contentinfo" key={site.name.common}>{site.name.common}</div>))
  )
}

export default Countries;
