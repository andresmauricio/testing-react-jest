import { useCountires } from "./hooks/useCountries";

// I-useEffectCustomHook
const Countries = () => {
  const { countries } = useCountires();
  return (
    countries && countries.map((site: any) => (<div role="contentinfo" key={site.name.common}>{site.name.common}</div>))
  )
}

export default Countries;
