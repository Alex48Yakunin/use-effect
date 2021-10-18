import { useEffect, useState } from "react";

export default function Details({id}) {
  const [details, setDetails] = useState({details: {}}),
        [loading, setLoading] = useState(false);

  useEffect(() => {
    const responseData = async () => {
      setLoading(true);
      await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
        .then((resp) => resp.json())
        .then((data) => {
          setDetails(data);
        })
        .catch((e) => {
          console.error(`Ошибка загрузки: ${e}`)
        })
        .finally(() => {setLoading(false)})
    }
    responseData();
  }, [id]);

  return (
    <>
       {loading && <div>Загрузка...</div>}
       {!loading && 
          <div className="card-detail">
            <img className="card-detail__img" src={details.avatar} alt=""/>
            <div className="card-detail__item card-detail__item_name">{details.name}</div>
            <div className="card-detail__item">City: {details.details.city}</div>
            <div className="card-detail__item">Company: {details.details.company}</div>
            <div className="card-detail__item">Position: {details.details.position}</div>
          </div>
       }
    </>
  )
}