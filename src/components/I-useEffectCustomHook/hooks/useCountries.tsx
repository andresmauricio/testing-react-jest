import { useEffect, useState } from "react"
import { getAllCountries } from "../../../services/countries";

export const useCountires = () => {
  const [countries, setCountries] = useState([] as any)


  const getCountries = async () => {
    const listOfcountires = await getAllCountries();
    setCountries(listOfcountires)
  }

  useEffect(() => {
    getCountries();
  }, [])


  return { countries }

}
